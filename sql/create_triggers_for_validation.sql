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
 * IS_VALID_IMAGE_EXTENSION()
 * @description This function indicates if the specified image extension is valid or not. Valid image's 
 * extensions: JPG, JPEG, PNG, GIF.
 * @author Sergio Baena Lopez
 * @version 15.3.1
 * @param {VARCHAR(4)} extension the image's extension to validate
 * @return {INT(1)} if the specified image extension is valid or not
 */
DELIMITER //
CREATE FUNCTION IS_VALID_IMAGE_EXTENSION( extension VARCHAR(4) ) RETURNS INT(1)
    BEGIN
        RETURN extension REGEXP '^JPE?G$|^PNG$|^GIF$';
    END
//
DELIMITER ;

/**
 * IS_SPECIAL_BOOLEAN()
 * @description This function indicates if the specified integer is a special boolean or not. A special 
 * boolean is an integer between -1 and 1.
 * @author Sergio Baena Lopez
 * @version 15.3.1
 * @param {INT(1)} integer_to_check the integer to check
 * @return {INT(1)} if the specified integer is a special boolean or not
 */
DELIMITER //
CREATE FUNCTION IS_SPECIAL_BOOLEAN( integer_to_check INT(1) ) RETURNS INT(1)
    BEGIN
        RETURN integer_to_check BETWEEN -1 AND 1;
    END
//
DELIMITER ;

/**
 * IS_VALID_DEADLINE()
 * @description This function indicates if the specified deadline is valid or not. The deadline must be 
 * specified after 5 days.
 * @author Sergio Baena Lopez
 * @version 15.3.1
 * @param {DATETIME} deadline the deadline to check
 * @return {INT(1)} f the specified deadline is valid or not
 */
DELIMITER //
CREATE FUNCTION IS_VALID_DEADLINE( deadline DATETIME ) RETURNS INT(1)
    BEGIN
        DECLARE deadline_date DATE DEFAULT CAST(deadline AS DATE);
        DECLARE today_date DATE DEFAULT CURDATE();
        DECLARE right_deadline0 DATE DEFAULT DATE_ADD(today_date, INTERVAL 5 DAY);
        DECLARE right_deadline1 DATE DEFAULT DATE_ADD(today_date, INTERVAL 4 DAY); -- possible gap        
        RETURN deadline_date = right_deadline0 OR deadline_date = right_deadline1;
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

/**
 * BEFORE_IMAGE()
 * @description This procedure validates all the data to insert/update in adb_image
 * @author Sergio Baena Lopez
 * @version 15.3.1
 * @throw 10001 'Invalid image extension' if the image extension to insert/update is invalid
 * @throw 10003 'Invalid special boolean' if the special boolean to insert/update is invalid
 * @throw 10005 'Invalid deadline of validation' if the deadline of validation to insert/update is invalid
 * @throw 10... '<error_list>' if there were several errors to insert/update. We show all the errors and 
 * the error's number is going to be the sum of all those errors' number (last digit) 
 * @param {INT(1)} is_updating if this procedure executes for an updating
 * @param {INT(6)} id_image the image's id 
 * @param {VARCHAR(4)} new_extension the new extension to insert/update
 * @param {INT(1)} new_is_valid the new is_valid to insert/update
 * @param {DATETIME} new_deadline_validation the new deadline of validation to insert/update
 */
DELIMITER //
CREATE PROCEDURE BEFORE_IMAGE (
    is_updating INT(1),
    id_image INT(6),
    new_extension VARCHAR(4), 
    new_is_valid INT(1),
    new_deadline_validation DATETIME 
)
    BEGIN
        DECLARE there_is_error INT(1) DEFAULT 0;
        DECLARE error_num INT(5) DEFAULT 10000;
        DECLARE errorsList VARCHAR(200) DEFAULT '';
        -- We look if are there any errors. We salve them.
        IF !IS_VALID_IMAGE_EXTENSION(new_extension) THEN
            SET there_is_error = 1;
            SET error_num = error_num + 1;
            SET errorsList = CONCAT(errorsList, '', 'Invalid image extension. ');
        END IF;
        IF !IS_SPECIAL_BOOLEAN(new_is_valid) THEN
            SET there_is_error = 1;
            SET error_num = error_num + 3;
            SET errorsList = CONCAT(errorsList, '', 'Invalid special boolean. ');
        END IF;
        -- Is it updating?
        IF is_updating THEN
            -- We look if the deadline has been modified or not
            IF new_deadline_validation != (
                SELECT adb_image.deadline_validation
                FROM adb_image
                WHERE adb_image.id = id_image
            ) THEN
                -- The two deadline aren't equals --> there is some modification 
                -- The deadline must give true in IS_VALID_DEADLINE
                IF !IS_VALID_DEADLINE(new_deadline_validation) THEN
                    SET there_is_error = 1;
                    SET error_num = error_num + 5;
                    SET errorsList = CONCAT(errorsList, '', 'Invalid deadline of validation. ');
                END IF;
            END IF;
        ELSE 
            -- is inserting
            IF !IS_VALID_DEADLINE(new_deadline_validation) THEN
                SET there_is_error = 1;
                SET error_num = error_num + 5;
                SET errorsList = CONCAT(errorsList, '', 'Invalid deadline of validation. ');
            END IF;
        END IF;
        -- We throw an exception if there are some errors (we're going to indicate those errors). 
        IF there_is_error THEN 
            CALL THROW_EXCEPTION(error_num, errorsList);
        END IF;
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
 * BEFORE_INSERT_IMAGE()
 * @description This trigger validates all the data to insert in adb_image
 * @author Sergio Baena Lopez
 * @version 15.3.1
 * @throw 10001 'Invalid image extension' if the image extension to insert is invalid
 * @throw 10003 'Invalid special boolean' if the special boolean to insert is invalid
 * @throw 10005 'Invalid deadline of validation' if the deadline of validation to insert is invalid
 * @throw 10... '<error_list>' if there were several errors to insert. We show all the errors and 
 * the error's number is going to be the sum of all those errors' number (last digit) 
 */
DELIMITER //
CREATE TRIGGER BEFORE_INSERT_IMAGE BEFORE INSERT ON adb_image FOR EACH ROW 
    BEGIN
        CALL BEFORE_IMAGE(0, NULL, NEW.extension, NEW.is_valid, NEW.deadline_validation);
    END
//
DELIMITER ;

/**
 * BEFORE_UPDATE_IMAGE()
 * @description This trigger validates all the data to update in adb_image
 * @author Sergio Baena Lopez
 * @version 15.3.1
 * @throw 10001 'Invalid image extension' if the image extension to update is invalid
 * @throw 10003 'Invalid special boolean' if the special boolean to update is invalid
 * @throw 10005 'Invalid deadline of validation' if the deadline of validation to update is invalid
 * @throw 10... '<error_list>' if there were several errors to update. We show all the errors and 
 * the error's number is going to be the sum of all those errors' number (last digit) 
 */
DELIMITER //
CREATE TRIGGER BEFORE_UPDATE_IMAGE BEFORE UPDATE ON adb_image FOR EACH ROW
    BEGIN
        CALL BEFORE_IMAGE(1,NEW.id, NEW.extension, NEW.is_valid, NEW.deadline_validation);
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
