# OmniTrack Landing Website



### How to run the website on local system

 
* install node.js on your system (https://nodejs.org) if not installed.


* pull the 'source' branch of this  repository into your local directory:

```sh
> cd git_projects
> git clone -b source https://github.com/OmniTrack/omnitrack.github.io.git
```

* move to repository root:
```sh
> cd omnitrack.github.io
> npm install
```

* install angular-cli and gh-pages command
```sh
> npm i -g angular-cli
```

* run server
```sh
> ng serve
```

* access website via http://localhost:4200



### How to deploy webpage

* install ghpages command
```sh
> npm i -g angular-cli-ghpages
```

* run deploy script

Linux / OS X:
```sh
> sh ./deploy.sh
```

Windows:
```sh
> deploy.sh
```