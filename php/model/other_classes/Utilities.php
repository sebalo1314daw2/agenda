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
      /**
       * wasFileSent()
       * This function indicates if the file was sent or not
       * @author Sergio Baena Lopez
       * @version 21.0
       * @param [] $file the file to check
       * @return bool if the file was sent or not
       */
      public static function wasFileSent($file) {
          $wasSent = false;
          if( is_array($file) ) {
              if( isset( $file["error"] ) ) {
                  if( $file["error"] == 0 ) {
                      if ( 
                            isset( $file["name"] )      &&
                            isset( $file["type"] )      && 
                            isset( $file["tmp_name"] )  &&
                            isset( $file["size"] )
                      ) {
                          if( is_string( $file["tmp_name"] ) ) {
                              if( is_file( $file["tmp_name"] ) ) {
                                  $wasSent = true;
                              }
                          }
                      }
                  } 
              }
          }
          return $wasSent;
      }
    /**
     * isValidTypeImage()
     * This function indicates if the specified image's type is valid or not. We consider 
     * valid the types JPEG and PNG.
     * @author Sergio Baena Lopez
     * @version 21.0
     * @param String $type the image's type to check
     * @return bool if the specified image's type is valid or not.
     */
     public static function isValidTypeImage($type) {
        $JPEG = "image/jpeg";
        $PNG = "image/png";
        
        return $type == $JPEG || $type == $PNG;
     }
    /**
     * isValidSizeImage()
     * This function indicates if the specified image's size is valid or not. We consider 
     * valid until 5MB (5242880 bytes).
     * @author Sergio Baena Lopez
     * @version 21.0
     * @param int $size the image's size to check
     * @return bool if the specified image's size is valid or not.
     */
    public static function isValidSizeImage($size) {
        return $size <= 5242880; 
    }
    /**
     * isValidWidthImage()
     * This function indicates if the specified image's width is valid or not. We consider 
     * valid least 720px.
     * @author Sergio Baena Lopez
     * @version 21.0
     * @param String $pathImage the image's path whose image has to check
     * @return bool if the specified image's width is valid or not.
     */
    public static function isValidWidthImage($pathImage) {
        $infoImg = getimagesize($pathImage);
        $width = $infoImg[0];
        
        return $width >= 720;
    }
    /**
     * isValidWord()
     * This function indicates if the specified word is valid or not. A word is 
     * considered valid when it isn't an empty string and it only contains letters
     * @author Sergio Baena Lopez
     * @version 21.0
     * @param String $word the word to check
     * @return bool if the specified word is valid or not
     */
    private static function isValidWord($word) {
        return preg_match("/^[a-zàáèéíòóúñç·üï]+$/", mb_strtolower($word, "UTF-8") ) ? true : false;
    }
    /**
     * isValidSentence()
     * This function indicates if the specified sentence is valid or not. A sentence
     * is considered valid when it is a list of valid words (the words are separated with spaces)
     * @author Sergio Baena Lopez
     * @version 21.0
     * @param String $sentence the sentence to check
     * @return bool if the specified sentence is valid or not
     */
    public static function isValidSentence($sentence) {
        $isValid = true;
        $wordList = preg_split( "/[ ]+/", trim($sentence) );
        
        for($i = 0; $i < count($wordList); $i++) {
            if( !self::isValidWord( $wordList[$i] ) ) { // the word isn't valid
                $isValid = false;
            }
        }
        
        return $isValid;
    }
    /**
     * isValidPassword()
     * @description This function indicates if the specified password is valid or not. An 
     * password is considered valid when it is an hexadecimal number of 32 digits
     * @author Sergio Baena Lopez
     * @version 21.0
     * @param string $password the password to check
     * @return bool if the specified password is valid or not
     */
     public static function isValidPassword($password) {
         return preg_match("/^[0-9a-f]{32}$/", $password) ? true : false;
     }
    /**
     * isValidAlias()
     * This function indicates if the specified alias is valid or not. An alias
     * is considered valid when it only contains letters, numbers, spaces and "_", "-" and "." 
     * @author Sergio Baena Lopez
     * @version 21.0
     * @param string $alias the alias to check
     * @return bool if the specified alias is valid or not
     */
     public static function isValidAlias($alias) {
        $regExp0 = "/^[a-zàáèéíòóúñç·üï0-9 _.-]+$/";
        $regExp1 = "/^[ ]+$/";
        
        $string0 = mb_strtolower($alias, "UTF-8");
        $string1 = $alias;   
         
        return preg_match($regExp0, $string0) &&
               !preg_match($regExp1, $string1);
     }
     /**
      * convertToProperNouns()
      * This function converts the specified string to proper nouns for the database
      * @author Sergio Baena Lopez
      * @version 21.0
      * @param string $string the string to convert
      * @return string the string which was converted to proper nouns 
      */
     public static function convertToProperNouns($string) {
         return self::convertText( ucwords( mb_strtolower($string, "UTF-8") ) );
     }
     /**
      * obtainExtensionFromMimeType()
      * This function obtains the extension from the specified MIME type
      * @author Sergio Baena Lopez
      * @version 21.0
      * @param string $mimeType the MIME type 
      * @return string the extension from the specified MIME type
      */
     public static function obtainExtensionFromMimeType($mimeType) {
        switch($mimeType) {
            case "image/jpeg":
                $extension = "jpg";
                break;
            case "image/png":
                $extension = "png";
                break;
        }
        return $extension;
     }
     /**
      * convertBoolToInt()
      * This procedure converts the specified boolean to the corresponding integer
      * @author Sergio Baena Lopez
      * @version 21.0
      * @param bool $bool the boolean to convert
      * @return int its corresponding integer
      */
     public static function convertBoolToInt($bool) {
         if(!$bool) {
             $int = 0;
         } else {
             $int = 1;
         }
         
         return $int;
     }
     /**
      * convertDateTimeToString()
      * This function converts the specified date time to a string for the database
      * @author Sergio Baena Lopez
      * @version 21.0
      * @param DateTime $dateTime the data time to convert
      * @return string the specified date time to a string for the database
      */
     public static function convertDateTimeToString($dateTime) {
         return $dateTime->format("Y-m-d H:i:s");
     }
     /**
      * determinateUTF8Codification()
      * This procedure determinates the UTF8 codification
      * @author Sergio Baena Lopez
      * @version 21.0
      */
     public static function determinateUTF8Codification() {
         header('Content-Type: text/html; charset=UTF-8');
     }
   /**
    * hasRightLength()
    * This function checks if the specified string's length doesn't lead to the specified maximum 
    * length
    * @author Sergio Baena Lopez
    * @version 22.1
    * @param string $str the string to check
    * @param int $maxLeng the maximum length which the specified string can have
    * @return bool if the specified string's length doesn't lead to the specified maximum 
    * length or yes
    */
    public static function hasRightLength($str, $maxLeng) {
        return strlen($str) <= $maxLeng;
    }
   }
?>
