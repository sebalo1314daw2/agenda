-- This SQL script is going to create the triggers and other functions for the validation




-- Procedure which throws exceptions

/**
 * THROW_EXCEPTION()
 * @description This procedure throws an exception
 * @author Sergio Baena Lopez
 * @version 15.3
 * @param {BIGINT UNSIGNED} error_number  The error's number which you want to put 
 * @param {VARCHAR(256)} msg  The error's message which you want to put 
 */
DELIMITER //
CREATE PROCEDURE THROW_EXCEPTION( error_number BIGINT UNSIGNED, msg VARCHAR(256) )
    BEGIN
        SIGNAL SQLSTATE
            'ERR0R'
        SET
            MESSAGE_TEXT = msg,
            MYSQL_ERRNO = error_number;
    END
//
DELIMITER ;




-- Conversion's functions

/**
 * HTML_ENTITIES()
 * @description This function converts the specified string to HTML entities (only Catalan and Spanish)
 * @author Sergio Baena Lopez
 * @version 15.3
 * @param {VARCHAR(VARCHAR(65536)} string the string to convert
 * @return {VARCHAR(VARCHAR(65536)} the specified string to HTML entities
 */
DELIMITER //
CREATE FUNCTION HTML_ENTITIES( string VARCHAR(65536) ) RETURNS VARCHAR(65536)
    BEGIN
        -- accents
        SET string = REPLACE(string, 'À', '&Agrave;');
        SET string = REPLACE(string, 'à', '&agrave;');
        SET string = REPLACE(string, 'È', '&Egrave;');
        SET string = REPLACE(string, 'è', '&egrave;');
        SET string = REPLACE(string, 'Ò', '&Ograve;');
        SET string = REPLACE(string, 'ò', '&ograve;');
        SET string = REPLACE(string, 'Á', '&Aacute;');
        SET string = REPLACE(string, 'á', '&aacute;');
        SET string = REPLACE(string, 'É', '&Eacute;');
        SET string = REPLACE(string, 'é', '&eacute;');
        SET string = REPLACE(string, 'Í', '&Iacute;');
        SET string = REPLACE(string, 'í', '&iacute;');
        SET string = REPLACE(string, 'Ó', '&Oacute;');
        SET string = REPLACE(string, 'ó', '&oacute;');
        SET string = REPLACE(string, 'Ú', '&Uacute;');
        SET string = REPLACE(string, 'ú', '&uacute;');
        -- umlauts
        SET string = REPLACE(string, 'Ï', '&Iuml;');
        SET string = REPLACE(string, 'ï', '&iuml;');
        SET string = REPLACE(string, 'Ü', '&Uuml;');
        SET string = REPLACE(string, 'ü', '&uuml;');
        -- special chars of the Catalan and Spanish languages
        SET string = REPLACE(string, 'ç', '&ccedil;');
        SET string = REPLACE(string, '·', '&middot;');
        SET string = REPLACE(string, 'ñ', '&ntilde;');
        SET string = REPLACE(string, 'º', '&ordm;');
        SET string = REPLACE(string, 'ª', '&ordf;;');
        -- special sign punctuation
        SET string = REPLACE(string, '¿', '&iquest;');
        SET string = REPLACE(string, '¡', '&iexcl;');
        -- malicious code
        SET string = REPLACE(string, '<', '&lt;');
        SET string = REPLACE(string, '>', '&gt;');
        RETURN string;
    END
//
DELIMITER ;




-- Validate's functions

/**
 * IS_POSITIVE_INTEGER()
 * @description This function checks if the specified string is a positive integer or not.
 * @author Sergio Baena Lopez
 * @version 15.3
 * @param {INT(1)} is_integer_with_zeros_after It indicates if the format to check is '000...n' or 'n'
 * @param {VARCHAR(65536)} string_to_check the string to check
 * @return {INT(1)} if the specified string is a positive integer or not
 */
DELIMITER //
CREATE FUNCTION IS_POSITIVE_INTEGER( is_integer_with_zeros_after INT(1), string_to_check VARCHAR(65536) )
RETURNS INT(1)
    BEGIN
        DECLARE is_positive_int INT(1);
        SET is_positive_int = 0;
        IF is_integer_with_zeros_after THEN -- Format: '000...n'
            IF string_to_check REGEXP '^[0123456789]+$' THEN -- is positive integer
                SET is_positive_int = 1;
            END IF;
        ELSE                                -- Format: 'n'
            IF (string_to_check REGEXP '^[123456789][0123456789]*$') OR (string_to_check = '0')  THEN 
                SET is_positive_int = 1; -- is positive integer
            END IF;
        END IF;
        RETURN is_positive_int;
    END
//
DELIMITER ;

/**
 * IS_VALID_EMAIL()
 * @description This function indicates if the specified email is valid or not
 * @author Sergio Baena Lopez
 * @version 15.3
 * @param {VARCHAR(320)} email The email to check
 * @return {INT(1)} if the specified email is valid or not
 */
DELIMITER //
CREATE FUNCTION IS_VALID_EMAIL( email VARCHAR(320) ) RETURNS INT(1)
    BEGIN
        DECLARE is_valid INT(1);
        SET is_valid = 0;
        IF email REGEXP BINARY '^[A-Za-z0-9]([.]?[A-Za-z0-9_-])*@[a-z0-9][a-z0-9-]+[a-z0-9]([.][a-z]{2,})+$' THEN 
            SET is_valid = 1;
        END IF;
        RETURN is_valid;
    END
//
DELIMITER ;

/**
 * IS_VALID_DNI()
 * @description This function indicates if the specified DNI is valid or not
 * @author Sergio Baena Lopez
 * @version 15.3
 * @param {VARCHAR(9)} dni the DNI to validate
 * @return {INT(1)} if the specified DNI is valid or not
 */
DELIMITER //
CREATE FUNCTION IS_VALID_DNI( dni VARCHAR(9) ) RETURNS INT(1)
	BEGIN
		DECLARE num_dni VARCHAR(8);
		DECLARE letter_dni VARCHAR(1);
		DECLARE correct_letter VARCHAR(1);
		DECLARE is_valid INT(1);
		SET is_valid = 0;
		IF LENGTH(dni) = 9 THEN -- DNI's length is right --> it can be right
                    SET num_dni = SUBSTR(dni, 1, 8);
                    IF IS_POSITIVE_INTEGER(1, num_dni) THEN -- The numeric part is positive integer --> it can be right
                        SET letter_dni = SUBSTR(dni, 9);
                        SET correct_letter = SUBSTR('TRWAGMYFPDXBNJZSQVHLCKE', num_dni % 23 + 1, 1);
                        IF correct_letter = letter_dni THEN
                                SET is_valid = 1;
                        END IF;
                    END IF;
                END IF;    
		RETURN is_valid;
	END	
//
DELIMITER ;




-- Triggers' common content

/**
 * BEFORE_MESSAGE()
 * @description This procedure validates and converts all the data to insert/update in adb_message
 * @author Sergio Baena Lopez
 * @version 15.3
 * @throw 10000 'Invalid email' if the email to insert/update is invalid
 * @param {VARCHAR(68)} new_issue the new issue to insert/update
 * @param {VARCHAR(432)} new_body the new body to insert/update
 * @param { VARCHAR(320)} new_email he new email to insert/update
 */
DELIMITER //
CREATE PROCEDURE BEFORE_MESSAGE( new_issue VARCHAR(68), new_body VARCHAR(432), new_email VARCHAR(320) )
    BEGIN
        -- Email validation
        IF !IS_VALID_EMAIL(new_email) THEN
            CALL THROW_EXCEPTION(10000, 'Invalid email');
        END IF;
        -- Conversion of issue and body to HTML entities
        SET new_issue = HTML_ENTITIES(new_issue);
        SET new_body = HTML_ENTITIES(new_body);
    END
// 
DELIMITER ;




-- Triggers

/**
 * BEFORE_INSERT_MESSAGE()
 * @description This trigger validates and converts all the data to insert in adb_message
 * @author Sergio Baena Lopez
 * @version 15.3
 * @throw 10000 'Invalid email' if the email to insert is invalid
 */
DELIMITER //
CREATE TRIGGER BEFORE_INSERT_MESSAGE BEFORE INSERT ON adb_message FOR EACH ROW 
    BEGIN
        CALL BEFORE_MESSAGE(NEW.issue, NEW.body, NEW.email);
    END
//
DELIMITER ;

/**
 * BEFORE_UPDATE_MESSAGE()
 * @description This trigger validates and converts all the data to update in adb_message
 * @author Sergio Baena Lopez
 * @version 15.3
 * @throw 10000 'Invalid email' if the email to update is invalid
 */
DELIMITER //
CREATE TRIGGER BEFORE_UPDATE_MESSAGE BEFORE UPDATE ON adb_message FOR EACH ROW
    BEGIN
        CALL BEFORE_MESSAGE(NEW.issue, NEW.body, NEW.email);
    END
//
DELIMITER ;

/**
 * BEFORE_INSERT_DNI_ADMIN_USER()
 * @description This trigger validates the DNI to insert in adb_admin_user
 * @author Sergio Baena Lopez
 * @version 15.3
 * @throw 10000 'Invalid DNI' if the DNI to insert isn't valid
 */
DELIMITER //
CREATE TRIGGER BEFORE_INSERT_DNI_ADMIN_USER BEFORE INSERT ON adb_admin_user FOR EACH ROW 
    BEGIN
        IF !IS_VALID_DNI(NEW.dni) THEN
            CALL THROW_EXCEPTION(10000, 'Invalid DNI');
        END IF;
    END
//
DELIMITER ;

/**
 * BEFORE_UPDATE_DNI_ADMIN_USER()
 * @description This trigger validates the DNI to update in adb_admin_user
 * @author Sergio Baena Lopez
 * @version 15.3
 * @throw 90000 'Invalid DNI' if the DNI to update isn't valid
 */
DELIMITER //
CREATE TRIGGER BEFORE_UPDATE_DNI_ADMIN_USER BEFORE UPDATE ON adb_admin_user FOR EACH ROW 
    BEGIN
        IF !IS_VALID_DNI(NEW.dni) THEN
            CALL THROW_EXCEPTION(90000, 'Invalid DNI');
        END IF;
    END
//
DELIMITER ;
