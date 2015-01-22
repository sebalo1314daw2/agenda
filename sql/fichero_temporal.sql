/**
 * IS_BOOLEAN()
 * @description This function indicates if the specified integer is boolean or not. Boolean numbers: 0 
 * and 1.
 * @author Sergio Baena Lopez
 * @version 15.3.1
 * @param {INT(1)} integer_to_check the integer to check
 * @return {INT(1)} if the specified integer is boolean or not.
 */
DELIMITER //
CREATE FUNCTION IS_BOOLEAN( integer_to_check INT(1) ) RETURNS INT(1)
    BEGIN
        RETURN integer_to_check = 0 OR integer_to_check = 1;
    END
//
DELIMITER ;
