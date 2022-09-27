// var tabTrigger = document.querySelectorAll('.nav-item');

// tabTrigger.forEach(function (tabTrigger, index) {
//     tabTrigger.addEventListener('click', function () {
//         var currentTabData = document.querySelector('.tab-content[data-content="' + this.dataset.tabTrigger + '"]');

//         // remove classess
//         document.querySelector('.tab-content.is-open').classList.remove('is-open');
//         document.querySelector('.nav-link.is-active').classList.remove('is-active');
//         // add classes
//         currentTabData.classList.add('is-open');
//         this.classList.add('is-active');
//     });
// });



// new jsss
$(".nav-item").on("click", function () {
    // debugger;
    var index = $(".nav-item").index(this);
    if (!$(this).hasClass("active")) {
        $(this).addClass("active").siblings().removeClass("active");
        $(".tab-content").eq(index).removeClass("dsp-none").siblings(".tab-content").addClass("dsp-none");
    } 
})




