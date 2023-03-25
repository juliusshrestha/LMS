# connect to mysql database.
DBNAME = "asha_inc" # add your database name
UNAME = "admin" # add your user name
PASS = "admin" # add your password
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': DBNAME,
        'USER': UNAME,
        'PASSWORD': PASS,
        'HOST': 'localhost',
        'PORT': '3306',
    }
}