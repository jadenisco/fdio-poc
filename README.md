# site-johndenisco-org

## Overview

This repo is used for the johndenisco.org site. The site is rendered using the [Hugo](https://gohugo.io) framework for building
websites. I started with the [Hugo](https://gohugo.io) [basic example](https://github.com/gohugoio/hugoBasicExample). The theme
I am starting with the [casper3](https://github.com/jonathanjanssens/hugo-casper3). I learned how to layout my content, use shortcodes
and much more from Mike Dane's [Giraffe Academy](https://www.mikedane.com/static-site-generators/hugo/).

## How to use this repo

### Setup an ssh key

``` console
$ ssh-keygen -t rsa
$
```

### Clone the repo

``` console
$ git clone ssh://git@github.com/jadenisco/fdio-poc
Cloning into 'site'...
remote: Enumerating objects: 3, done.
remote: Counting objects: 100% (3/3), done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
Receiving objects: 100% (3/3), done.
$ cd fdio-poc
$
```

### Work Locally with Hugo

To make your changes locally initialize the git submodules. This example uses the casper3 theme.

### Adding a submodule

When first incorporating a theme for the first time we add the submodule.  

``` console
$ git submodule add https://github.com/jonathanjanssens/hugo-casper3.git themes/hugo-casper3
$
```

### Update the submodule

After cloning the repo, Update the submodule.

``` console
$ git submodule update --init --recursive
Submodule 'themes/hugo-casper3' (git@github.com:jonathanjanssens/hugo-casper3.git) registered for path 'themes/hugo-casper3'
Cloning into '/Users/jdenisco/Developer/MrJohnsWeb/johndenisco-org/site-johndenisco-org/themes/hugo-casper3'...
Submodule path 'themes/hugo-casper3': checked out '7e1ea26fe7be0eb72baf9b2c103b81646b9e9be9'
$
```

## Working with Hugo

### Run the web server

Then run the Hugo server locally.

``` console
$ hugo server --disableFastRender

                   | EN
+------------------+----+
  Pages            | 42
  Paginator pages  |  0
  Non-page files   |  0
  Static files     | 96
  Processed images |  0
  Aliases          | 11
  Sitemaps         |  1
  Cleaned          |  0

Total in 40 ms
Watching for changes in /Developer/hugo/site/{assets,content,data,layouts,static,themes}
Watching for config changes in /Developer/hugo/site/config.toml
Serving pages from memory
Web Server is available at //localhost:1313/ (bind address 127.0.0.1)
Press Ctrl+C to stop
$
```

You can then make your changes and preview them by pointing your browser to the URL
displayed from the hugo server command.

### Make the changes

If you are not using a branch, don't checkout and simply push "main"

``` console
$
$ git checkout -b nameofbranch
$ git status
On branch nameofbranch
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

  modified:   README.md

no changes added to commit (use "git add" and/or "git commit -a")

$ git add *
$ git commit -s -m "Add to the README"
[add-to-readme f81812c] Add to the README
 1 file changed, 76 insertions(+), 1 deletion(-)
$ git status
....
$
```

### Push the changes

Edit and commit work locally. You can create local topic branch(es) if
you like, but it's not necessary.

``` console
$ git add *
$ git commit -s -m "Add a descriptive comment here"
$
```

Upload patches

```console
$ git push origin <branch-name>  # often <branch-name> == main
$
```

## To create the pages

```console
$ hugo server
$
```

The results will be placed in the directory public
