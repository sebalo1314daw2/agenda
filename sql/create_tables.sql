-- This SQL script is going to create all the tables of the application
CREATE TABLE adb_web (
	id                      INT(1)                              PRIMARY KEY         AUTO_INCREMENT  ,
	general_info            VARCHAR(65536)      NOT NULL                                            ,
        group_info              VARCHAR(65536)      NOT NULL                                            ,
        group_a_info            VARCHAR(65536)      NOT NULL                                            ,
        group_b_info            VARCHAR(65536)      NOT NULL                                            ,
        footer                  VARCHAR(420)        NOT NULL
) ENGINE = MyISAM;
-- Create 'email_web' table
-- TODO
CREATE TABLE adb_message (
	id                      INT(6)                              PRIMARY KEY         AUTO_INCREMENT  ,
	issue                   VARCHAR(68)         NOT NULL                                            ,
        body                    VARCHAR(432)        NOT NULL                                            ,
        email                   VARCHAR(320)        NOT NULL                                            
) ENGINE = MyISAM;

CREATE TABLE adb_image (
	id                      INT(6)                              PRIMARY KEY         AUTO_INCREMENT  ,
        extension               VARCHAR(4)          NOT NULL                                            ,
        is_valid                INT(1)              NOT NULL                                            ,
        deadline_validation     DATE                NOT NULL                                            
) ENGINE = MyISAM;

CREATE TABLE adb_user (
	id                      INT(6)                              PRIMARY KEY         AUTO_INCREMENT  ,
        id_image                INT(6)              NOT NULL                    UNIQUE                  ,
        name                    VARCHAR(40)         NOT NULL                                            ,
        surnames                VARCHAR(40)         NOT NULL                                            ,
        password                VARCHAR(50)         NOT NULL                                            ,
        register_date           DATE                NOT NULL                                            ,
        FOREIGN KEY(id_image) REFERENCES adb_image(id)
) ENGINE = MyISAM;

CREATE TABLE adb_email_user (
	id                      INT(6)                              PRIMARY KEY         AUTO_INCREMENT  ,
        id_user                 INT(6)              NOT NULL                     UNIQUE                 ,
        value                   VARCHAR(320)        NOT NULL                     UNIQUE                 ,
        is_valid                INT(1)              NOT NULL                                            ,
        deadline_validation     DATE                NOT NULL                                            ,
        FOREIGN KEY(id_user) REFERENCES adb_user(id)
) ENGINE = MyISAM;

CREATE TABLE adb_admin_user (
	id_user                 INT(6)                              PRIMARY KEY                         ,
        landline                INT(9)              NOT NULL                                            ,
        mobile_phone            INT(9)              NOT NULL                    UNIQUE                  ,
        dni                     VARCHAR(9)          NOT NULL                    UNIQUE                  ,
        FOREIGN KEY(id_user) REFERENCES adb_user(id)
) ENGINE = MyISAM;

CREATE TABLE adb_group (
        id                      INT(6)                              PRIMARY KEY         AUTO_INCREMENT  ,
        id_image                INT(6)              NOT NULL                    UNIQUE                  ,
        name                    VARCHAR(40)         NOT NULL                    UNIQUE                  ,
        FOREIGN KEY(id_image) REFERENCES adb_image(id)  
) ENGINE = MyISAM;

CREATE TABLE adb_group_a (
        id_group                INT(6)                              PRIMARY KEY                         ,
        id_creator              INT(6)              NOT NULL                                            ,
        creation_date           DATE                NOT NULL                                            ,
        FOREIGN KEY(id_group) REFERENCES adb_group(id)                                                  ,
        FOREIGN KEY(id_creator) REFERENCES adb_user(id)
) ENGINE = MyISAM;

CREATE TABLE adb_groups_composition (
       id_group                INT(6)                                                                    ,
       id_user                 INT(6)                                                                    ,
       did_member_date         DATE                 NOT NULL                                             ,
       PRIMARY KEY(id_group, id_user)                                                                    ,
       FOREIGN KEY(id_group) REFERENCES adb_group(id)                                                    ,
       FOREIGN KEY(id_user) REFERENCES adb_user(id)
) ENGINE = MyISAM;

CREATE TABLE adb_task (
       id                       INT(6)                              PRIMARY KEY         AUTO_INCREMENT  ,
       id_owner_user            INT(6)                                                                  ,
       id_owner_group           INT(6)                                                                  ,
       day                      DATE                NOT NULL                                            ,       
       issue                    VARCHAR(68)         NOT NULL                                            ,
       body                     VARCHAR(432)        NOT NULL                                            ,
       did_owner_date           DATE                NOT NULL                                            ,                     
       FOREIGN KEY(id_owner_user) REFERENCES adb_user(id)                                               ,
       FOREIGN KEY(id_owner_group) REFERENCES adb_group(id) 
) ENGINE = MyISAM;

CREATE TABLE adb_groups_access (
       id_group                 INT(6)                                                                  ,
       id_task                  INT(6)                                                                  ,
       had_access_date          DATE                 NOT NULL                                           ,
       PRIMARY KEY(id_group, id_task)                                                                   ,
       FOREIGN KEY(id_group) REFERENCES adb_group(id)                                                   ,
       FOREIGN KEY(id_task) REFERENCES adb_task(id)   
) ENGINE = MyISAM;

CREATE TABLE adb_groups_sharing (
       id_group                 INT(6)                                                                  ,
       id_task                  INT(6)                                                                  ,
       id_user                  INT(6)               NOT NULL                                           ,
       PRIMARY KEY(id_group, id_task)                                                                   ,
       FOREIGN KEY(id_group) REFERENCES adb_group(id)                                                   ,
       FOREIGN KEY(id_task) REFERENCES adb_task(id)                                                     ,
       FOREIGN KEY(id_user) REFERENCES adb_user(id) 
) ENGINE = MyISAM;

CREATE TABLE adb_users_access ( 
       id_user                  INT(6)                                                                  ,
       id_task                  INT(6)                                                                  ,
       had_access_date          DATE                 NOT NULL                                           ,
       PRIMARY KEY(id_user, id_task)                                                                    ,
       FOREIGN KEY(id_user) REFERENCES adb_user(id)                                                     ,
       FOREIGN KEY(id_task) REFERENCES adb_task(id) 
) ENGINE = MyISAM;

CREATE TABLE adb_users_sharing ( 
       id_user                  INT(6)              NOT NULL                                            ,
       id_shared_user           INT(6)                                                                  ,
       id_task                  INT(6)                                                                  ,
       PRIMARY KEY(id_shared_user, id_task)                                                             ,
       FOREIGN KEY(id_user) REFERENCES adb_user(id)                                                     ,
       FOREIGN KEY(id_shared_user) REFERENCES adb_user(id)                                              ,
       FOREIGN KEY(id_task) REFERENCES adb_task(id) 
) ENGINE = MyISAM;

CREATE TABLE adb_realization ( 
        id_user                 INT(6)                                                                  ,
        id_task                 INT(6)                                                                  ,
        PRIMARY KEY(id_user, id_task)                                                                   ,
        FOREIGN KEY(id_user) REFERENCES adb_user(id)                                                    ,
        FOREIGN KEY(id_task) REFERENCES adb_task(id)
) ENGINE = MyISAM;

CREATE TABLE adb_comment ( 
        id                      INT(6)                              PRIMARY KEY         AUTO_INCREMENT  ,
        id_task                 INT(6)              NOT NULL                                            ,
        id_user                 INT(6)              NOT NULL                                            ,
        value                   VARCHAR(432)        NOT NULL                                            ,
        sorting_num             INT(3)              NOT NULL                                            ,
        FOREIGN KEY(id_task) REFERENCES adb_task(id)                                                    ,
        FOREIGN KEY(id_user) REFERENCES adb_user(id)
) ENGINE = MyISAM;

CREATE TABLE adb_reading ( 
        id_comment               INT(6)                                                                 ,
        id_user                  INT(6)                                                                 ,
        PRIMARY KEY(id_comment, id_user)                                                                ,
        FOREIGN KEY(id_comment) REFERENCES adb_comment(id)                                              ,
        FOREIGN KEY(id_user) REFERENCES adb_user(id)
) ENGINE = MyISAM;

CREATE TABLE adb_group_b ( 
        id_group                 INT(6)                             PRIMARY KEY                        ,
        id_manager               INT(6)             NOT NULL                                           ,
        did_manager_date         DATE               NOT NULL                                           ,
        FOREIGN KEY(id_group) REFERENCES adb_group(id)                                                 ,
        FOREIGN KEY(id_manager) REFERENCES adb_user(id)
) ENGINE = MyISAM;

CREATE TABLE adb_friendship_solicitude_from_user ( 
       id_group                 INT(6)                                                                 ,
       id_user                  INT(6)                                                                 ,
       solicitude_date          DATE                NOT NULL                                           ,
       PRIMARY KEY(id_group, id_user)                                                                  ,
       FOREIGN KEY(id_group) REFERENCES adb_group(id)                                                  ,
       FOREIGN KEY(id_user) REFERENCES adb_user(id)
) ENGINE = MyISAM;

CREATE TABLE adb_friendship_solicitude_from_group ( 
       id_group                 INT(6)                                                                 ,
       id_user                  INT(6)                                                                 ,
       solicitude_date          DATE                NOT NULL                                           ,
       PRIMARY KEY(id_group, id_user)                                                                  ,
       FOREIGN KEY(id_group) REFERENCES adb_group(id)                                                  ,
       FOREIGN KEY(id_user) REFERENCES adb_user(id)
) ENGINE = MyISAM;

CREATE TABLE adb_normal_user ( 
       id_user                  INT(6)                              PRIMARY KEY                        ,
       alias                    VARCHAR(40)         NOT NULL                                           ,
       FOREIGN KEY(id_user) REFERENCES adb_user(id)
) ENGINE = MyISAM;

CREATE TABLE adb_aggregation ( 
       id_user_0                INT(6),
       id_user_1                INT(6),
       aggregation_date         DATE                NOT NULL                                            ,
       PRIMARY KEY(id_user_0, id_user_1)                                                                ,
       FOREIGN KEY(id_user_0) REFERENCES adb_user(id)                                                   ,
       FOREIGN KEY(id_user_1) REFERENCES adb_user(id)
) ENGINE = MyISAM;

CREATE TABLE adb_friendship_solicitude ( 
       id_transmitter           INT(6)                                                                  ,
       id_receiver              INT(6)                                                                  ,
       solicitude_date          DATE                NOT NULL                                            ,
       PRIMARY KEY(id_transmitter, id_receiver)                                                         ,
       FOREIGN KEY(id_transmitter) REFERENCES adb_user(id)                                              ,
       FOREIGN KEY(id_receiver) REFERENCES adb_user(id) 
) ENGINE = MyISAM;