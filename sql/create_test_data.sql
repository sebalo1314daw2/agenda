-- This SQL script is going to create the test data of the application




-- Table adb_message

INSERT INTO adb_message (
    issue,
    body,
    email
) VALUES (
    'Una duda que tengo',
    'No s&eacute; como resolver esta duda.',
    'pepe@gmail.com'
);

INSERT INTO adb_message (
    issue,
    body,
    email
) VALUES (
    'Otra duda que tengo',
    'Tampoco s&eacute; reserlver esta otra duda',
    'juan@gmail.com'
);

INSERT INTO adb_message (
    issue,
    body,
    email
) VALUES (
    'Hola!!',
    'Qu&eacute; tal?',
    'chica@gmail.com'
);




-- Table adb_image

INSERT INTO adb_image (
    extension,
    is_valid,
    deadline_validation
) VALUES (
    'png',
    0,
    '2015-02-11 17:30:55'
);

INSERT INTO adb_image (
    extension,
    is_valid,
    deadline_validation
) VALUES (
    'jpg',
    1,
    '2015-03-11 20:30:59'
);

INSERT INTO adb_image (
    extension,
    is_valid,
    deadline_validation
) VALUES (
    'jpg',
    1,
    '2020-03-11 02:30:59'
);

INSERT INTO adb_image (
    extension,
    is_valid,
    deadline_validation
) VALUES (
    'png',
    0,
    '2019-03-11 02:30:59'
);

INSERT INTO adb_image (
    extension,
    is_valid,
    deadline_validation
) VALUES (
    'png',
    1,
    '2018-03-11 02:49:59'
);

INSERT INTO adb_image (
    extension,
    is_valid,
    deadline_validation
) VALUES (
    'gif',
    0,
    '2018-12-03 20:49:59'
);

INSERT INTO adb_image (
    extension,
    is_valid,
    deadline_validation
) VALUES (
    'gif',
    1,
    '2017-08-03 10:49:59'
);

INSERT INTO adb_image (
    extension,
    is_valid,
    deadline_validation
) VALUES (
    'gif',
    0,
    '3017-08-03 10:49:59'
);

INSERT INTO adb_image (
    extension,
    is_valid,
    deadline_validation
) VALUES (
    'png',
    1,
    '2008-02-29 11:49:59'
);

INSERT INTO adb_image (
    extension,
    is_valid,
    deadline_validation
) VALUES (
    'jpg',
    1,
    '2008-02-28 11:49:59'
);

INSERT INTO adb_image (
    extension,
    is_valid,
    deadline_validation
) VALUES (
    'jpg',
    1,
    '2009-02-28 11:49:59'
);

INSERT INTO adb_image (
    extension,
    is_valid,
    deadline_validation
) VALUES (
    'gif',
    0,
    '2008-03-30 11:00:00'
);

INSERT INTO adb_image (
    extension,
    is_valid,
    deadline_validation
) VALUES (
    'gif',
    1,
    '2222-02-28 23:50:59'
);

INSERT INTO adb_image (
    extension,
    is_valid,
    deadline_validation
) VALUES (
    'jpg',
    0,
    '2008-03-28 11:49:59'
);

INSERT INTO adb_image (
    extension,
    is_valid,
    deadline_validation
) VALUES (
    'png',
    1,
    '3008-02-28 03:49:59'
);

INSERT INTO adb_image (
    extension,
    is_valid,
    deadline_validation
) VALUES (
    'png',
    0,
    '2010-02-28 03:49:59'
);

INSERT INTO adb_image (
    extension,
    is_valid,
    deadline_validation
) VALUES (
    'png',
    1,
    '3008-02-28 04:49:59'
);

INSERT INTO adb_image (
    extension,
    is_valid,
    deadline_validation
) VALUES (
    'png',
    1,
    '3019-02-28 03:49:59'
);

INSERT INTO adb_image (
    extension,
    is_valid,
    deadline_validation
) VALUES (
    'png',
    1,
    '1999-02-28 03:49:59'
);

INSERT INTO adb_image (
    extension,
    is_valid,
    deadline_validation
) VALUES (
    'png',
    1,
    '3008-02-29 03:49:59'
);

INSERT INTO adb_image (
    extension,
    is_valid,
    deadline_validation
) VALUES (
    'png',
    1,
    '3008-02-29 03:49:00'
);

INSERT INTO adb_image (
    extension,
    is_valid,
    deadline_validation
) VALUES (
    'png',
    0,
    '3008-10-29 03:49:59'
);

INSERT INTO adb_image (
    extension,
    is_valid,
    deadline_validation
) VALUES (
    'gif',
    0,
    '2009-09-09 03:49:59'
);

INSERT INTO adb_image (
    extension,
    is_valid,
    deadline_validation
) VALUES (
    'png',
    0,
    '2001-01-01 00:00:00'
);

INSERT INTO adb_image (
    extension,
    is_valid,
    deadline_validation
) VALUES (
    'gif',
    1,
    '2011-11-09 03:49:59'
);




-- Table adb_user

INSERT INTO adb_user (
    id_image,
    name,
    surnames,
    password,
    register_date
) VALUES (
    1,
    'Sergio',
    'Baena L&oacute;pez',
    'dc1d67d1a5e9d52940945516548c8ec3', -- Remember: the password is the encrypted name (md5)
    '2008-02-29 11:49:59'
);

INSERT INTO adb_user (
    id_image,
    name,
    surnames,
    password,
    register_date
) VALUES (
    2,
    'Marta',
    'Gonz&aacute;lez Villalba',
    '83f9c4eb242966cdcada1d01be5d9b15', -- Remember: the password is the encrypted name (md5)
    '2012-02-28 21:49:59'
);

INSERT INTO adb_user (
    id_image,
    name,
    surnames,
    password,
    register_date
) VALUES (
    3,
    'Pedro',
    'Rel&aacute;mpago Trueno',
    '38e2b2e31c0fce9537f735dda9fdf10a', -- Remember: the password is the encrypted name (md5)
    '2022-02-29 13:49:00'
);

INSERT INTO adb_user (
    id_image,
    name,
    surnames,
    password,
    register_date
) VALUES (
    4,
    'Segismunda',
    'De los Dolores Agudos',
    'fc0b8ed14b87bebff88e60e8d046adf4', -- Remember: the password is the encrypted name (md5)
    '3008-02-29 11:00:59'
);

INSERT INTO adb_user (
    id_image,
    name,
    surnames,
    password,
    register_date
) VALUES (
    5,
    'Berta',
    'Manzanar Rodr&iacute;guez',
    '50ed83ef4cb6a7c41e7a974194515b8c', -- Remember: the password is the encrypted name (md5)
    '2008-10-29 11:49:59'
);

INSERT INTO adb_user (
    id_image,
    name,
    surnames,
    password,
    register_date
) VALUES (
    6,
    'Juan',
    'Rat&oacute;n Rato',
    '92eaf3719159c372f3d50337e0a14f57', -- Remember: the password is the encrypted name (md5)
    '2010-10-29 11:49:59'
);

INSERT INTO adb_user (
    id_image,
    name,
    surnames,
    password,
    register_date
) VALUES (
    7,
    'Ana',
    'Chocolate Con Nata',
    '9aba45a7f1999a9c5fc96ef2a45810fb', -- Remember: the password is the encrypted name (md5)
    '2009-10-29 11:49:59'
);

INSERT INTO adb_user (
    id_image,
    name,
    surnames,
    password,
    register_date
) VALUES (
    8,
    'Rodolfo',
    'Casanova Blanco',
    'f288a8ac2358d7c838eb879ba4d8d9f4', -- Remember: the password is the encrypted name (md5)
    '2015-05-08 08:05:00'
);

INSERT INTO adb_user (
    id_image,
    name,
    surnames,
    password,
    register_date
) VALUES (
    9,
    'Natalia',
    'Guzm&aacute;n L&oacute;pez',
    'f6aa7331fe78ee7eac93cbbd1f5cdf75', -- Remember: the password is the encrypted name (md5)
    '2008-10-29 11:00:59'
);

INSERT INTO adb_user (
    id_image,
    name,
    surnames,
    password,
    register_date
) VALUES (
    10,
    'Zanahoria',
    'Pitufo Libreta',
    '3158b3e8b252c1c81572ceda34036bf8', -- Remember: the password is the encrypted name (md5)
    '2016-06-22 06:49:59'
);

INSERT INTO adb_user (
    id_image,
    name,
    surnames,
    password,
    register_date
) VALUES (
    11,
    'Lorena',
    'Garc&iacute;a Mart&iacute;nez',
    '0d2dcd6fcb7eeeaec7a317efbd01da0e', -- Remember: the password is the encrypted name (md5)
    '2019-01-31 00:49:00'
);

INSERT INTO adb_user (
    id_image,
    name,
    surnames,
    password,
    register_date
) VALUES (
    12,
    'Patricia',
    'Costa Navarre',
    '54a7b18f26374fc200ddedde0844f8ec', -- Remember: the password is the encrypted name (md5)
    '2016-06-22 12:49:59'
);

INSERT INTO adb_user (
    id_image,
    name,
    surnames,
    password,
    register_date
) VALUES (
    13,
    'Mariano',
    'Hern&aacute;ndez Silva',
    '529f9db80f0933695cc20fff6f675205', -- Remember: the password is the encrypted name (md5)
    '2022-06-22 06:49:59'
);

INSERT INTO adb_user (
    id_image,
    name,
    surnames,
    password,
    register_date
) VALUES (
    14,
    'Amapola',
    'G&oacute;mez Herrera',
    'ed496b3a4b048ad0a34c6b1cd9ca42ed', -- Remember: the password is the encrypted name (md5)
    '2023-06-22 06:49:59'
);

INSERT INTO adb_user (
    id_image,
    name,
    surnames,
    password,
    register_date
) VALUES (
    15,
    'Yasmina',
    'Alonso Moreno',
    'ac10af5ec133bfa6b331ff1dacb4f5a8', -- Remember: the password is the encrypted name (md5)
    '3016-06-22 06:49:59'
);




-- Table adb_email_user

INSERT INTO adb_email_user (
    id_user,
    value,
    is_valid,
    deadline_validation
) VALUES (
    1,
    'sergio@gmail.com',
    1,
    '2008-10-29 11:49:59'
);

INSERT INTO adb_email_user (
    id_user,
    value,
    is_valid,
    deadline_validation
) VALUES (
    2,
    'marta@gmail.com',
    0,
    '2020-10-29 11:49:59'
);

INSERT INTO adb_email_user (
    id_user,
    value,
    is_valid,
    deadline_validation
) VALUES (
    3,
    'pedro@gmail.com',
    1,
    '2020-11-29 11:49:59'
);

INSERT INTO adb_email_user (
    id_user,
    value,
    is_valid,
    deadline_validation
) VALUES (
    4,
    'segismunda@gmail.com',
    0,
    '2015-06-02 11:49:59'
);

INSERT INTO adb_email_user (
    id_user,
    value,
    is_valid,
    deadline_validation
) VALUES (
    5,
    'berta@gmail.com',
    1,
    '2015-10-02 02:49:59'
);

INSERT INTO adb_email_user (
    id_user,
    value,
    is_valid,
    deadline_validation
) VALUES (
    6,
    'juan@gmail.com',
    0,
    '2015-10-02 02:49:59'
);

INSERT INTO adb_email_user (
    id_user,
    value,
    is_valid,
    deadline_validation
) VALUES (
    7,
    'ana@gmail.com',
    1,
    '2015-10-02 02:49:59'
);

INSERT INTO adb_email_user ( 
    id_user,
    value,
    is_valid,
    deadline_validation
) VALUES (
    8,
    'rodolfo@gmail.com',
    0,
    '2015-11-02 02:49:59'
);

INSERT INTO adb_email_user (
    id_user,
    value,
    is_valid,
    deadline_validation
) VALUES (
    9,
    'natalia@gmail.com',
    0,
    '2014-10-02 02:49:59'
);

INSERT INTO adb_email_user (
    id_user,
    value,
    is_valid,
    deadline_validation
) VALUES (
    10,
    'zanahoria@gmail.com',
    1,
    '2000-10-02 02:49:59'
);

INSERT INTO adb_email_user (
    id_user,
    value,
    is_valid,
    deadline_validation
) VALUES (
    11,
    'lorena@gmail.com',
    1,
    '0000-00-00 00:00:00'
);

INSERT INTO adb_email_user (
    id_user,
    value,
    is_valid,
    deadline_validation
) VALUES (
    12,
    'patricia@gmail.com',
    1,
    '0000-00-00 00:00:00'
);

INSERT INTO adb_email_user (
    id_user,
    value,
    is_valid,
    deadline_validation
) VALUES (
    13,
    'mariano@gmail.com',
    1,
    '0000-00-00 00:00:00'
);

INSERT INTO adb_email_user (
    id_user,
    value,
    is_valid,
    deadline_validation
) VALUES (
    14,
    'amapola@gmail.com',
    1,
    '0000-00-00 00:00:00'
);

INSERT INTO adb_email_user (
    id_user,
    value,
    is_valid,
    deadline_validation
) VALUES (
    15,
    'yasmina@gmail.com',
    1,
    '0000-00-00 00:00:00'
);




-- Table adb_admin_user

INSERT INTO adb_admin_user (
    id_user,
    landline,
    mobile_phone,
    dni
) VALUES (
    11,
    938762311,
    654823404,
    '90271403Z'
);

INSERT INTO adb_admin_user (
    id_user,
    landline,
    mobile_phone,
    dni
) VALUES (
    12,
    938762322,
    698236521,
    '56039777R'
);

INSERT INTO adb_admin_user (
    id_user,
    landline,
    mobile_phone,
    dni
) VALUES (
    13,
    938754368,
    666666666,
    '04603360W'
);

INSERT INTO adb_admin_user (
    id_user,
    landline,
    mobile_phone,
    dni
) VALUES (
    14,
    939847211,
    792983123,
    '42374114H'
);

INSERT INTO adb_admin_user (
    id_user,
    landline,
    mobile_phone,
    dni
) VALUES (
    15,
    939999999,
    792874444,
    '05775235G'
);




-- Table adb_group

INSERT INTO adb_group (
    id_image,
    name
) VALUES (
    16,
    'Els millors del m&oacute;n'
);

INSERT INTO adb_group (
    id_image,
    name
) VALUES (
    17,
    'Classe DAW2'
);

INSERT INTO adb_group (
    id_image,
    name
) VALUES (
    18,
    'Colla'
);

INSERT INTO adb_group (
    id_image,
    name
) VALUES (
    19,
    'Treball'
);

INSERT INTO adb_group (
    id_image,
    name
) VALUES (
    20,
    'Fam&iacute;lia'
);

INSERT INTO adb_group (
    id_image,
    name
) VALUES (
    21,
    'E0I'
);

INSERT INTO adb_group (
    id_image,
    name
) VALUES (
    22,
    'Carnet de conduir'
);

INSERT INTO adb_group (
    id_image,
    name
) VALUES (
    23,
    'Los chiflados'
);

INSERT INTO adb_group (
    id_image,
    name
) VALUES (
    24,
    'Batxillerat'
);

INSERT INTO adb_group (
    id_image,
    name
) VALUES (
    25,
    'Amics'
);




-- Table adb_group_a

INSERT INTO adb_group_a (
    id_group,
    id_creator,
    creation_date
) VALUES (
    1,
    1,
    '2015-01-01 17:05:32'
);

INSERT INTO adb_group_a (
    id_group,
    id_creator,
    creation_date
) VALUES (
    2,
    1,
    '2015-01-02 10:44:01'
);

INSERT INTO adb_group_a (
    id_group,
    id_creator,
    creation_date
) VALUES (
    3,
    8,
    '2007-08-11 10:00:01'
);

INSERT INTO adb_group_a (
    id_group,
    id_creator,
    creation_date
) VALUES (
    4,
    5,
    '2014-12-25 23:10:34'
);

INSERT INTO adb_group_a (
    id_group,
    id_creator,
    creation_date
) VALUES (
    5,
    4,
    '2015-02-12 14:00:00'
);




-- Table adb_groups_composition

INSERT INTO adb_groups_composition (
    id_group,
    id_user,
    did_member_date
) VALUES (
    1,
    2,
    '2015-01-01 09:00:00'
);

INSERT INTO adb_groups_composition (
    id_group,
    id_user,
    did_member_date
) VALUES (
    1,
    4,
    '2015-01-02 09:00:00'
);

INSERT INTO adb_groups_composition (
    id_group,
    id_user,
    did_member_date
) VALUES (
    1,
    7,
    '2013-01-02 09:00:00'
);

INSERT INTO adb_groups_composition (
    id_group,
    id_user,
    did_member_date
) VALUES (
    2,
    8,
    '2011-01-02 09:00:00'
);

INSERT INTO adb_groups_composition (
    id_group,
    id_user,
    did_member_date
) VALUES (
    2,
    2,
    '2009-09-09 09:09:09'
);

INSERT INTO adb_groups_composition (
    id_group,
    id_user,
    did_member_date
) VALUES (
    2,
    6,
    '2009-09-09 09:09:09'
);

INSERT INTO adb_groups_composition (
    id_group,
    id_user,
    did_member_date
) VALUES (
    3,
    1,
    '2010-10-10 10:10:10'
);

INSERT INTO adb_groups_composition (
    id_group,
    id_user,
    did_member_date
) VALUES (
    3,
    5,
    '2010-10-10 10:10:10'
);

INSERT INTO adb_groups_composition (
    id_group,
    id_user,
    did_member_date
) VALUES (
    4,
    7,
    '2011-11-11 11:11:11'
);

INSERT INTO adb_groups_composition (
    id_group,
    id_user,
    did_member_date
) VALUES (
    5,
    9,
    '2011-11-11 11:11:11'
);

INSERT INTO adb_groups_composition (
    id_group,
    id_user,
    did_member_date
) VALUES (
    5,
    3,
    '2007-07-09 11:11:11'
);

INSERT INTO adb_groups_composition (
    id_group,
    id_user,
    did_member_date
) VALUES (
    5,
    7,
    '2007-07-09 11:11:11'
);

INSERT INTO adb_groups_composition (
    id_group,
    id_user,
    did_member_date
) VALUES (
    5,
    2,
    '2007-07-09 11:11:11'
);

INSERT INTO adb_groups_composition (
    id_group,
    id_user,
    did_member_date
) VALUES (
    6,
    1,
    '2007-07-09 11:11:11'
);

INSERT INTO adb_groups_composition (
    id_group,
    id_user,
    did_member_date
) VALUES (
    6,
    4,
    '2010-07-09 11:11:11'
);

INSERT INTO adb_groups_composition (
    id_group,
    id_user,
    did_member_date
) VALUES (
    6,
    8,
    '2010-07-09 11:11:11'
);

INSERT INTO adb_groups_composition (
    id_group,
    id_user,
    did_member_date
) VALUES (
    6,
    6,
    '2010-07-09 11:11:11'
);

INSERT INTO adb_groups_composition (
    id_group,
    id_user,
    did_member_date
) VALUES (
    7,
    5,
    '2010-07-09 11:11:11'
);

INSERT INTO adb_groups_composition (
    id_group,
    id_user,
    did_member_date
) VALUES (
    7,
    1,
    '2010-07-09 11:11:11'
);

INSERT INTO adb_groups_composition (
    id_group,
    id_user,
    did_member_date
) VALUES (
    7,
    2,
    '2010-07-09 11:11:11'
);

INSERT INTO adb_groups_composition (
    id_group,
    id_user,
    did_member_date
) VALUES (
    8,
    5,
    '2010-07-09 11:11:11'
);

INSERT INTO adb_groups_composition (
    id_group,
    id_user,
    did_member_date
) VALUES (
    8,
    4,
    '2010-07-09 11:11:11'
);

INSERT INTO adb_groups_composition (
    id_group,
    id_user,
    did_member_date
) VALUES (
    9,
    10,
    '2010-07-09 11:11:11'
);

INSERT INTO adb_groups_composition (
    id_group,
    id_user,
    did_member_date
) VALUES (
    10,
    9,
    '2019-07-09 11:11:11'
);




-- Table adb_task 

INSERT INTO adb_task (
    id_owner_user,
    id_owner_group,
    day,
    issue,
    body,
    did_owner_date
) VALUES (
    1,
    null,
    '2015-09-07',
    'Java',
    'Fes el zooAp',
    '2015-01-01 18:09:11'
);

INSERT INTO adb_task (
    id_owner_user,
    id_owner_group,
    day,
    issue,
    body,
    did_owner_date
) VALUES (
    1,
    null,
    '2015-09-07',
    'Fol',
    'Memoritza l&#39;estatut dels treballadors',
    '2015-01-09 15:09:11'
);

INSERT INTO adb_task (
    id_owner_user,
    id_owner_group,
    day,
    issue,
    body,
    did_owner_date
) VALUES (
    1,
    null,
    '2015-09-09',
    'Sistemes',
    'Fes la pr&agrave;ctica de xarxes i la pr&agrave;ctica de comandes',
    '2015-02-01 18:00:11'
);

INSERT INTO adb_task (
    id_owner_user,
    id_owner_group,
    day,
    issue,
    body,
    did_owner_date
) VALUES (
    1,
    null,
    '2015-10-19',
    'Entorns de desenvolupament',
    'Fes el model entitat relaci&oacute; del projecte de fi de curs',
    '2014-09-30 20:09:11'
);

INSERT INTO adb_task (
    id_owner_user,
    id_owner_group,
    day,
    issue,
    body,
    did_owner_date
) VALUES (
    null,
    2,
    '2012-09-07',
    'Java',
    'Fes l&#39;aplicaci&oacute; amb el qual practiquem l&#39;her&egrave;ncia: vehicleAp',
    '2011-01-01 18:09:11'
);

INSERT INTO adb_task (
    id_owner_user,
    id_owner_group,
    day,
    issue,
    body,
    did_owner_date
) VALUES (
    null,
    8,
    '2077-09-07',
    'JavaScript',
    'Fes la pr&agrave;ctica en qu&egrave;ctiquem els iFrames. Utilitza el model vista contrador (MVC).',
    '2015-01-01 18:09:11'
);

INSERT INTO adb_task (
    id_owner_user,
    id_owner_group,
    day,
    issue,
    body,
    did_owner_date
) VALUES (
    4,
    null,
    '2025-09-07',
    'oooooooooooooo',
    'kkkkkkkkkkkkkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkkkkkkkkkkkkk ',
    '2015-01-09 19:09:11'
);

INSERT INTO adb_task (
    id_owner_user,
    id_owner_group,
    day,
    issue,
    body,
    did_owner_date
) VALUES (
    null,
    9,
    '2019-09-07',
    'Programaci&oacute; en C',
    'Fes la pr&agrave;ctica sobre cadenes de car&agrave;cters',
    '2035-01-01 18:09:11'
);

INSERT INTO adb_task (
    id_owner_user,
    id_owner_group,
    day,
    issue,
    body,
    did_owner_date
) VALUES (
    null,
    4,
    '2095-09-07',
    'Java',
    'Fes el zooAp',
    '2015-01-01 18:09:11'
);

INSERT INTO adb_task (
    id_owner_user,
    id_owner_group,
    day,
    issue,
    body,
    did_owner_date
) VALUES (
    8,
    null,
    '2085-09-07',
    'Java',
    'Fes el zooAp',
    '2015-01-01 18:09:11'
);




-- Table adb_groups_access 

INSERT INTO adb_groups_access (
    id_group,
    id_task,
    had_access_date
) VALUES (
    1,
    1,
    '2012-01-01 18:09:11'
);

INSERT INTO adb_groups_access (
    id_group,
    id_task,
    had_access_date
) VALUES (
    2,
    1,
    '2012-01-01 18:09:11'
);

INSERT INTO adb_groups_access (
    id_group,
    id_task,
    had_access_date
) VALUES (
    6,
    1,
    '2012-01-01 18:09:11'
);

INSERT INTO adb_groups_access (
    id_group,
    id_task,
    had_access_date
) VALUES (
    7,
    1,
    '2012-01-01 18:09:11'
);

INSERT INTO adb_groups_access (
    id_group,
    id_task,
    had_access_date
) VALUES (
    8,
    4,
    '2011-01-01 18:09:11'
);

INSERT INTO adb_groups_access (
    id_group,
    id_task,
    had_access_date
) VALUES (
    3,
    5,
    '2011-01-01 18:09:11'
);

INSERT INTO adb_groups_access (
    id_group,
    id_task,
    had_access_date
) VALUES (
    3,
    7,
    '2011-01-01 18:09:11'
);

INSERT INTO adb_groups_access (
    id_group,
    id_task,
    had_access_date
) VALUES (
    7,
    7,
    '2011-01-01 18:09:11'
);

INSERT INTO adb_groups_access (
    id_group,
    id_task,
    had_access_date
) VALUES (
    1,
    10,
    '2011-01-01 18:09:11'
);

INSERT INTO adb_groups_access (
    id_group,
    id_task,
    had_access_date
) VALUES (
    2,
    10,
    '2011-01-01 18:09:11'
);

INSERT INTO adb_groups_access (
    id_group,
    id_task,
    had_access_date
) VALUES (
    6,
    2,
    '2011-01-01 18:09:11'
);

INSERT INTO adb_groups_access (
    id_group,
    id_task,
    had_access_date
) VALUES (
    8,
    2,
    '2011-01-01 18:09:11'
);




-- Table adb_groups_sharing

INSERT INTO adb_groups_sharing (
    id_group,
    id_task,
    id_user
) VALUES (
    1,
    1,
    1
);

INSERT INTO adb_groups_sharing (
    id_group,
    id_task,
    id_user
) VALUES (
    2,
    1,
    1
);

INSERT INTO adb_groups_sharing (
    id_group,
    id_task,
    id_user
) VALUES (
    6,
    1,
    4
);

INSERT INTO adb_groups_sharing (
    id_group,
    id_task,
    id_user
) VALUES (
    6,
    2,
    1
);

INSERT INTO adb_groups_sharing (
    id_group,
    id_task,
    id_user
) VALUES (
    8,
    2,
    4
);

INSERT INTO adb_groups_sharing (
    id_group,
    id_task,
    id_user
) VALUES (
    3,
    7,
    8
);




-- Table adb_users_access

INSERT INTO adb_users_access (
    id_user,
    id_task,
    had_access_date
) VALUES (
    1,
    1,
    '2012-01-01 18:09:11'
);

INSERT INTO adb_users_access (
    id_user,
    id_task,
    had_access_date
) VALUES (
    4,
    1,
    '2012-01-09 18:09:11'
);

INSERT INTO adb_users_access (
    id_user,
    id_task,
    had_access_date
) VALUES (
    5,
    1,
    '2012-11-09 11:09:11'
);

INSERT INTO adb_users_access (
    id_user,
    id_task,
    had_access_date
) VALUES (
    1,
    2,
    '2008-02-29 11:09:11'
);

INSERT INTO adb_users_access (
    id_user,
    id_task,
    had_access_date
) VALUES (
    4,
    2,
    '2008-02-29 11:09:11'
);

INSERT INTO adb_users_access (
    id_user,
    id_task,
    had_access_date
) VALUES (
    1,
    4,
    '2008-02-29 11:09:11'
);

INSERT INTO adb_users_access (
    id_user,
    id_task,
    had_access_date
) VALUES (
    4,
    4,
    '2008-02-29 11:09:11'
);

INSERT INTO adb_users_access (
    id_user,
    id_task,
    had_access_date
) VALUES (
    1,
    5,
    '2008-02-29 11:09:11'
);

INSERT INTO adb_users_access (
    id_user,
    id_task,
    had_access_date
) VALUES (
    4,
    7,
    '2008-02-29 11:09:11'
);

INSERT INTO adb_users_access (
    id_user,
    id_task,
    had_access_date
) VALUES (
    8,
    7,
    '2008-02-29 11:09:11'
);

INSERT INTO adb_users_access (
    id_user,
    id_task,
    had_access_date
) VALUES (
    5,
    7,
    '2008-02-29 11:09:11'
);

INSERT INTO adb_users_access (
    id_user,
    id_task,
    had_access_date
) VALUES (
    8,
    10,
    '2008-02-29 11:09:11'
);

INSERT INTO adb_users_access (
    id_user,
    id_task,
    had_access_date
) VALUES (
    9,
    10,
    '2009-02-28 11:09:11'
);

INSERT INTO adb_users_access (
    id_user,
    id_task,
    had_access_date
) VALUES (
    3,
    10,
    '2009-02-28 11:09:11'
);

INSERT INTO adb_users_access (
    id_user,
    id_task,
    had_access_date
) VALUES (
    6,
    10,
    '2009-02-28 11:09:11'
);




-- Table adb_users_sharing

INSERT INTO adb_users_sharing (
    id_user,
    id_shared_user,
    id_task
) VALUES (
    1,
    4,
    1
);

INSERT INTO adb_users_sharing (
    id_user,
    id_shared_user,
    id_task
) VALUES (
    2,
    5,
    1
);

INSERT INTO adb_users_sharing (
    id_user,
    id_shared_user,
    id_task
) VALUES (
    1,
    4,
    2
);

INSERT INTO adb_users_sharing (
    id_user,
    id_shared_user,
    id_task
) VALUES (
    4,
    1,
    4
);

INSERT INTO adb_users_sharing (
    id_user,
    id_shared_user,
    id_task
) VALUES (
    1,
    8,
    7
);

INSERT INTO adb_users_sharing (
    id_user,
    id_shared_user,
    id_task
) VALUES (
    1,
    5,
    7
);

INSERT INTO adb_users_sharing (
    id_user,
    id_shared_user,
    id_task
) VALUES (
    8,
    9,
    10
);

INSERT INTO adb_users_sharing (
    id_user,
    id_shared_user,
    id_task
) VALUES (
    9,
    3,
    10
);

INSERT INTO adb_users_sharing (
    id_user,
    id_shared_user,
    id_task
) VALUES (
    8,
    6,
    10
);




-- Table adb_realization

INSERT INTO adb_realization (
    id_user,
    id_task
) VALUES (
    1,
    1
);

INSERT INTO adb_realization (
    id_user,
    id_task
) VALUES (
    5,
    1
);

INSERT INTO adb_realization (
    id_user,
    id_task
) VALUES (
    2,
    1
);

INSERT INTO adb_realization (
    id_user,
    id_task
) VALUES (
    7,
    1
);

INSERT INTO adb_realization (
    id_user,
    id_task
) VALUES (
    8,
    2
);

INSERT INTO adb_realization (
    id_user,
    id_task
) VALUES (
    4,
    4
);

INSERT INTO adb_realization (
    id_user,
    id_task
) VALUES (
    6,
    5
);

INSERT INTO adb_realization (
    id_user,
    id_task
) VALUES (
    4,
    7
);

INSERT INTO adb_realization (
    id_user,
    id_task
) VALUES (
    2,
    7
);

INSERT INTO adb_realization (
    id_user,
    id_task
) VALUES (
    3,
    10
);

INSERT INTO adb_realization (
    id_user,
    id_task
) VALUES (
    8,
    10
);

INSERT INTO adb_realization (
    id_user,
    id_task
) VALUES (
    2,
    10
);




-- Table adb_loss_of_access_of_members

INSERT INTO adb_loss_of_access_of_members (
    id_user,
    id_group,
    id_task
) VALUES (
    4,
    1,
    1
);

INSERT INTO adb_loss_of_access_of_members (
    id_user,
    id_group,
    id_task
) VALUES (
    8,
    2,
    1
);

INSERT INTO adb_loss_of_access_of_members (
    id_user,
    id_group,
    id_task
) VALUES (
    6,
    2,
    1
);

INSERT INTO adb_loss_of_access_of_members (
    id_user,
    id_group,
    id_task
) VALUES (
    5,
    8,
    4
);

INSERT INTO adb_loss_of_access_of_members (
    id_user,
    id_group,
    id_task
) VALUES (
    1,
    7,
    7
);




-- Table adb_comment

INSERT INTO adb_comment (
    id_task,
    id_user,
    value,
    sorting_num
) VALUES (
    1,
    1,
    'Hola!!!',
    0
);

INSERT INTO adb_comment (
    id_task,
    id_user,
    value,
    sorting_num
) VALUES (
    1,
    4,
    'Hola Sergio!!!',
    1
);

INSERT INTO adb_comment (
    id_task,
    id_user,
    value,
    sorting_num
) VALUES (
    1,
    1,
    '&iquest;Qu&eacute; tal?',
    2
);

INSERT INTO adb_comment (
    id_task,
    id_user,
    value,
    sorting_num
) VALUES (
    2,
    8,
    'Comentario es esto',
    0
);




-- Table adb_reading

INSERT INTO adb_reading (
    id_comment,
    id_user
) VALUES (
    1,
    4
);

INSERT INTO adb_reading (
    id_comment,
    id_user
) VALUES (
    1,
    5
);

INSERT INTO adb_reading (
    id_comment,
    id_user
) VALUES (
    2,
    1
);

INSERT INTO adb_reading (
    id_comment,
    id_user
) VALUES (
    4,
    6
);




-- Table adb_group_b

INSERT INTO adb_group_b (
    id_group,
    id_manager,
    did_manager_date
) VALUES (
    6,
    1,
    '2015-01-10 21:28:00'
);

INSERT INTO adb_group_b (
    id_group,
    id_manager,
    did_manager_date
) VALUES (
    7,
    2,
    '2015-01-11 21:28:00'
);

INSERT INTO adb_group_b (
    id_group,
    id_manager,
    did_manager_date
) VALUES (
    8,
    4,
    '2015-01-12 21:28:00'
);

INSERT INTO adb_group_b (
    id_group,
    id_manager,
    did_manager_date
) VALUES (
    9,
    10,
    '2015-01-13 21:28:00'
);

INSERT INTO adb_group_b (
    id_group,
    id_manager,
    did_manager_date
) VALUES (
    10,
    9,
    '2015-01-14 21:28:00'
);




-- Table adb_friendship_solicitude_from_user

INSERT INTO adb_friendship_solicitude_from_user (
    id_group,
    id_user,
    solicitude_date
) VALUES (
    6,
    2,
    '2015-01-14 21:28:00'
);

INSERT INTO adb_friendship_solicitude_from_user (
    id_group,
    id_user,
    solicitude_date
) VALUES (
    6,
    3,
    '2015-01-14 21:28:00'
);

INSERT INTO adb_friendship_solicitude_from_user (
    id_group,
    id_user,
    solicitude_date
) VALUES (
    7,
    8,
    '2015-01-14 21:28:00'
);

INSERT INTO adb_friendship_solicitude_from_user (
    id_group,
    id_user,
    solicitude_date
) VALUES (
    9,
    1,
    '2015-01-14 21:28:00'
);

INSERT INTO adb_friendship_solicitude_from_user (
    id_group,
    id_user,
    solicitude_date
) VALUES (
    9,
    2,
    '2015-01-14 21:28:00'
);

INSERT INTO adb_friendship_solicitude_from_user (
    id_group,
    id_user,
    solicitude_date
) VALUES (
    9,
    3,
    '2015-01-14 21:28:00'
);




-- Table adb_friendship_solicitude_from_group

INSERT INTO adb_friendship_solicitude_from_group (
    id_group,
    id_user,
    solicitude_date
) VALUES (
    7,
    3,
    '2015-01-14 21:28:00'
);

INSERT INTO adb_friendship_solicitude_from_group (
    id_group,
    id_user,
    solicitude_date
) VALUES (
    7,
    4,
    '2015-01-14 21:28:00'
);

INSERT INTO adb_friendship_solicitude_from_group (
    id_group,
    id_user,
    solicitude_date
) VALUES (
    8,
    3,
    '2015-01-14 21:28:00'
);

-- Table adb_normal_user

INSERT INTO adb_normal_user (
    id_user,
    alias
) VALUES (
    1,
    'el mejor'
);

INSERT INTO adb_normal_user (
    id_user,
    alias
) VALUES (
    2,
    'una se&ntilde;ora'
);

INSERT INTO adb_normal_user (
    id_user,
    alias
) VALUES (
    3,
    'picapiedra'
);

INSERT INTO adb_normal_user (
    id_user,
    alias
) VALUES (
    4,
    'com l&#39;obra de teatre'
);

INSERT INTO adb_normal_user (
    id_user,
    alias
) VALUES (
    5,
    'ksdfasb asjja'
);

INSERT INTO adb_normal_user (
    id_user,
    alias
) VALUES (
    6,
    'juanito'
);

INSERT INTO adb_normal_user (
    id_user,
    alias
) VALUES (
    7,
    'anita'
);

INSERT INTO adb_normal_user (
    id_user,
    alias
) VALUES (
    8,
    'el de ciutat'
);

INSERT INTO adb_normal_user (
    id_user,
    alias
) VALUES (
    9,
    'la m&eacute;s guapa'
);

INSERT INTO adb_normal_user (
    id_user,
    alias
) VALUES (
    10,
    's&oacute;c una verdura'
);




-- Table adb_aggregation

INSERT INTO adb_aggregation (
    id_user_0,
    id_user_1,
    aggregation_date
) VALUES (
    1,
    2,
    '2011-01-01 18:09:11'
);

INSERT INTO adb_aggregation (
    id_user_0,
    id_user_1,
    aggregation_date
) VALUES (
    1,
    8,
    '2011-01-01 18:09:11'
);

INSERT INTO adb_aggregation (
    id_user_0,
    id_user_1,
    aggregation_date
) VALUES (
    1,
    4,
    '2011-01-01 18:09:11'
);

INSERT INTO adb_aggregation (
    id_user_0,
    id_user_1,
    aggregation_date
) VALUES (
    8,
    10,
    '2011-01-01 18:09:11'
);

INSERT INTO adb_aggregation (
    id_user_0,
    id_user_1,
    aggregation_date
) VALUES (
    8,
    7,
    '2011-01-01 18:09:11'
);

INSERT INTO adb_aggregation (
    id_user_0,
    id_user_1,
    aggregation_date
) VALUES (
    5,
    6,
    '2011-01-01 18:09:11'
);




-- Table adb_friendship_solicitude

INSERT INTO adb_friendship_solicitude (
    id_transmitter,
    id_receiver,
    solicitude_date
) VALUES (
    1,
    3,
    '2011-01-01 18:09:11'
);

INSERT INTO adb_friendship_solicitude (
    id_transmitter,
    id_receiver,
    solicitude_date
) VALUES (
    1,
    5,
    '2011-01-01 18:09:11'
);

INSERT INTO adb_friendship_solicitude (
    id_transmitter,
    id_receiver,
    solicitude_date
) VALUES (
    5,
    10,
    '2011-01-09 18:09:11'
);




-- Table adb_web

INSERT INTO adb_web (
    general_info,
    group_info,
    group_a_info,
    group_b_info,
    footer
) VALUES (
    '<parragraf>
	A <negreta>computer</negreta> is a general purpose <negreta>device that can be programmed
	to carry out</negreta> a set operations can be readily changed, the computer can 
	solve more than one kind of problem.
    </parragraf>
    <parragraf>
            Conventionally, a computer consists of at least one processing element, typically can change
            <negreta>the order of operations</negreta> in response to <negreta>result of 
            operations saved and retrieved.</negreta> result of operations saved and retrieved. result.
            result of operations
    </parragraf>
    <parragraf>
            <negreta>Rudimentary calculating</negreta> devices first appeared in antiquity and mechanical 
            the word "computer" is also <negreta>from the 		17th</negreta> century, applied to 
            human computers, people <negreta>who performed calculations</negreta>,
    </parragraf>',
    '<negreta>Un grup</negreta> en "Agenda de butxaca" <negreta>&eacute;s una agrupaci&oacute; 
    d&#39;usuaris</negreta> que se&#39;n realitza segons un criteri (classe, fam&iacute;lia,
    amics, etc) amb la <negreta>finalitat</negreta> de poder <negreta>compartir-li 
    a tots ells certes tasques o esdeveniments.</negreta> D&#39;aquesta forma, podem
    evitar a vegades tenir que compartir una tasca u a u. ',
    '<negreta>Un grup A</negreta> &eacute;s un tipus de grup en qu&egrave; els <negreta>seus membres
    </negreta> han de ser obligat&ograve;riament <negreta>usuaris</negreta> que tens <negreta>
    agregats</negreta>. La <negreta>finalitat</negreta> d&#39;aix&ograve;, &eacute;s permitir-te que puguis
    <negreta>agrupar certs usuaris agregats</negreta>, evitant aix&iacute;, com s&#39;ha dit abans,
    fer-ho u a u cada vegada que sigui necessari. Per &uacute;ltim, s&#39;ha de comentar que tots
    <negreta>els grups</negreta> creats de tipus <negreta>A</negreta>, <negreta>solament 
    existeixen en l&#39;&agrave;mbit de l&#39;usuari</negreta> en concret, per a la resta, passa
    desapercebut, els quals, els percebeixen com si l&#39;hagu&eacute;s compartit u a u.',
    '<negreta>Un grup B</negreta> &eacute;s un tipus de grup en qu&egrave; els <negreta>seus membres no necess&agrave;riament 
    han d&#39;estar agregats</negreta> entre ells <negreta>individualment</negreta>. Aquest tipus de grup va 
    ser creat fonamentalment amb el fi d&#39;arreglar un gran problema que tenen els grups A. Quan tu vols
    crear un grup, per exemple, el grup "classe", el teu objectiu &eacute;s que en aquell grup estiguin dintre 
    tots i cadascun dels seus alumnes. No obstant, amb els grups A, aix&ograve; no est&agrave; tant garantit degut a qu&egrave;
    cadascun t&eacute; que crear aquell grup pel seu compte i incluir tots els alumnes. Per tant, depenent de qui
    comparta la tasca, uns o altres alumnes podrien no rebre la tasca. Quina &eacute;s la soluci&oacute; llavors? Doncs,
    crear un grup B anomenat "classe", <negreta>el</negreta> qual &eacute;s un <negreta>grup</negreta> que
    <negreta>existeix en l&#39;&agrave;mbit de tota l&#39;aplicaci&oacute;,</negreta> &eacute;s a dir, existeix per a tots els usuaris.
    I, per conseg&uuml;ent, <negreta>el grup</negreta> "classe" <negreta>consta dels mateixos</negreta> alumnes
    <negreta>sempre</negreta>. ',
    'Servei gratu&iuml;t que ofereix el Sergio Baena L&oacute;pez per a tothom que hi vulgui.'
);