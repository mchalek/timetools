from distutils.core import setup

setup(
        name = 'timetools',
        version = '1.0.0',
        description = 'CL tools for timestamps',
        author = 'Kevin McHale',
        author_email = 'mchalek@gmail.com',
        url = 'https://github.com/mchalek/timetools',
        scripts = [
            'bin/now',
            'bin/when',
            'bin/ts',
            'bin/daysago',
            'bin/hoursago',
            ])
