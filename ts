#!/usr/bin/python

import sys

def get_timestamp(dateStr):                                                     
    from dateutil import parser                                                 
    from dateutil.tz import tzutc                                               
    from calendar import timegm                                                 
    dt = parser.parse(dateStr, tzinfos=tzutc)                                   
    return timegm(dt.utctimetuple())                                            

if len(sys.argv) < 2:
    print('SYNTAX: %s date_string (format of your choosing)' % sys.argv[0])
    sys.exit(1)

time_string = ' '.join(sys.argv[1:])

try:
    ts = get_timestamp(time_string)
except:
    print('ERROR: could not parse `%s`' % time_string)
    sys.exit(1)

print('%s => %d' % (time_string, ts))
