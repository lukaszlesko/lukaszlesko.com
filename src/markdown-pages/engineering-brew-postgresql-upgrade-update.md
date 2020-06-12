---
path: /publications/engineering/brew-postgresql-update-upgrade
title: Upgrade old PostgreSQL version with latest one using brew on Mac OS X 
description: Simple guide to update PostgreSQL server on your local machine super fast. 
contentType: publication
created: 2020-06-12
---

That's my preferred way to know that's everything clean and the process takes few minutes or even less. 

1. Dump everything with `pg_dumpall`.
2. Remove old installation and cleanup storage (optional).
3. Install new version with brew.
4. Restore databases from `pg_dumpall`.

## Let's do this

I was starting from installed `postgresql@10` from brew and wanted to upgrade to PostgreSQL 12,
which is at the moment latest version.

```bash
# 1
pg_dumpall > db.out

# 2 (here you can do more, I personally deleted all the data;-)
brew uninstalll postgresql@10
mv /usr/local/var/postgres /usr/local/var/postgres.bck

# 3
brew install postgresql
brew services restart postgresql
psql --version

# 4
psql -f db.out postgres
```

