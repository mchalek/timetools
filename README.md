timetools
=========

Some command line tools for quick time lookups.  Most useful is probably `when`, which converts UTC
to date, automatically figuring out the likely unit of the UTC (msec, sec, or hour).

e.g.

```
kevin@ubuntu:~> when 1384871912325
(msec) Tue Nov 19 09:38:32 2013
    
kevin@ubuntu:~> when 384642
(  hr) Sun Nov 17 13:00:00 2013

kevin@ubuntu:~> when 1000000000
(msec) Mon Jan 12 08:46:40 1970
( sec) Sat Sep  8 21:46:40 2001
(  hr) Wed Jun 16 12:00:00 116049
```

Also:

```
kevin@ubuntu:~> now
1384872087335

kevin@ubuntu:~> daysago 1
1384785690633

kevin@ubuntu:~> hoursago 24
1384785692434
```
