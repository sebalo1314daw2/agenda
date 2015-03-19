<?php
    class Utilities {
        // ======================= Static methods===================================================
       /**
        * isValidText()
        * This function indicates if the specified text is valid or not. A text is considered
        * valid when it isn't empty string nor only spaces
        * @author Sergio Baena Lopez
        * @version 19.0
        * @param String $text the text to check
        * @return bool if the specified text is valid or not
        */
       public static function isValidText($text) {
           return !preg_match("/^$|^[ ]+$/", $text)? true : false;
       }
      /**
       * isValidEmail()
       * This function indicates if the specified email is valid or not.
       * @author Sergio Baena Lopez
       * @version 19.0
       * @param String $email the email to check
       * @return bool if the specified email is valid or not
       */
      public static function isValidEmail($email) {
          $pattern = "/^[A-Za-z0-9]([.]?[A-Za-z0-9_-])*@[a-z0-9][a-z0-9-]+[a-z0-9]([.][a-z]{2,})+$/";
          return preg_match($pattern, $email)? true : false;
      }
      /**
       * removeDoubleSpaces()
       * This function removes the doubles spaces of the specified text
       * @author Sergio Baena Lopez
       * @version 19.0
       * @param String $text the text to remove its double spaces
       * @return String the converted text
       */
      private static function removeDoubleSpaces($text) {
          $convertedText = trim($text);
          $convertedText = preg_replace("/[ ]{2,}/", " ", $convertedText);
          return $convertedText;
      }
      /**
       * convertText()
       * This function converts the specified text for the database. It will remove double spaces and 
       * it'll convert all to HTML entities.
       * @author Sergio Baena Lopez
       * @version 19.0
       * @param String $text the text to convert
       * @return String the converted text
       */
      public static function convertText($text) {
          return htmlentities( self::removeDoubleSpaces($text) );
      }
      /**
       * toJSON()
       * This function encodes the specified value to JSON
       * @author Sergio Baena Lopez
       * @version 20.2
       * @param Mixed $value the value to encode to JSON
       * @return String the encoded value to JSON
       */
      public static function toJSON($value) {
          if( is_object($value) ) { // the $value is object
              $encodedValue = json_encode( $value->toAssociativeArray() );
          } else {
              $encodedValue = json_encode($value);
          }
          return $encodedValue;
      }
    }
?>
