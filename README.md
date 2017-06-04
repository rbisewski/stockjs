# stockjs - Stock exchange checker via Google Finance, written in nodejs

stockjs is designed to check various commodities stocks present on the
NYSE and present the user with the current stock price, daily change as
a float and daily change as a percentile.

The data itself comes from the Google Finance API, as it is one of the
nicer APIs present on the web.

In addition, it also features an HTML resolver, which allows it to be
embedded into any HTML webpage or email.

One day I might consider adding other stock indices, but for now it is
designed around NYSE.


# Requirements

Specifically, the following packages are required:

* nodejs
* npm

On Ubuntu and Debian based Linux distros you may need to download the
nodejs-legacy package as well, since they handle npm apps differently
other variants of Linux.


# Installation

Clone the source code into a given directory on your machine.

    git clone https://gitlab.com/ibiscybernetics/stockjs

Change directory to the cloned code, and install as a nodejs app.

    npm install


# Running stockjs

Start the included nodejs server code, perhaps on a docker instance, using
the following command:

    npm start

To simulate a typeahead, perhaps on a docker instance at address 172.17.0.4,
run the following command:

    curl http://172.17.0.4:9145/typeahead?text=su

This will obtain information regarding symbol NYSE:SU from the Google Finance
API and return it as a JSON array.

To simulate a resolver, perhaps on a docker instance at address 172.17.0.4,
run the following command:

    curl http://172.17.0.4:9145/resolver?text=su

Afterwards the user will be given a slice of HTML code that can be used in
a webpage or email.

# Authors

This software written by Robert Bisewski at Ibis Cybernetics. For more
information, contact:

* Website -> www.ibiscybernetics.com

* Email -> contact@ibiscybernetics.com
