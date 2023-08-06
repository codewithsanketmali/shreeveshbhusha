function show_nav() {
    var mobileNav2 = document.querySelector('#mobile-nav1').className
    console.log("mobile nav", mobileNav2);
    if (mobileNav2 == "mobile-nav") {
        document.querySelector('#mobile-nav1').classList.remove('mobile-nav')
        document.querySelector('#mobile-nav1').classList.add('mobile-nav-2')
    } else {
        document.querySelector('#mobile-nav1').classList.add('mobile-nav')
        document.querySelector('#mobile-nav1').classList.remove('mobile-nav-2')
    }

}

