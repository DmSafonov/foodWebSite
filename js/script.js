//Tabs
const tabs = document.querySelectorAll('.tabheader__item'),
    tabsWrapper = document.querySelector('.tabheader__items'),
    tabsContent = document.querySelectorAll('.tabcontent');

    function hideTabs() {
        tabsContent.forEach((item) => {
            item.style.display = 'none';
            });
        tabs.forEach((item) => {
            item.classList.remove('tabheader__item_active');
            })
    };

function showTabs(i = 0){
    tabs[i].classList.add('tabheader__item_active');
    tabsContent[i].style.display = 'block';
};
hideTabs();
showTabs();

tabsWrapper.addEventListener('click', (event)=>{
    const target = event.target;

    if(target && target.classList.contains('tabheader__item')){
        tabs.forEach((item, i)=>{
            if(target == item){
                hideTabs();
                showTabs(i)
            }
        });
}});




