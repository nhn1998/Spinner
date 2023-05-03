function shuffle(array){
    var currentIndex = array.length,
    randomIndex;

    while(0 !== currentIndex){
        randomIndex=Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex],array[randomIndex]]=[
            array[currentIndex],
            array[currentIndex]
        ];
    }
    return array;
}
function spin(){
    wheel.play();
    const box=document.getElementById('box');
    const element=document.getElementById('mainbox');
    let SelectedItem="";

    let hundred = shuffle([1890,2250,2610]);
    let nintyFive=shuffle([1850,2210,2570])
    let twentySeven=shuffle([1770,2130,2490])
    let thirteen=shuffle([1810,2170,2530])
    let thirtyNine=shuffle([1750.2110,2470]);
    let sixty=shuffle([1630,1990,2350])
    let eleven=shuffle([1570,1930,2290])

    let results = shuffle([
        hundred[0],
        nintyFive[0],
        twentySeven[0],
        thirteen[0],
        thirtyNine[0],
        sixty[0],
        eleven[0],

    ]);

    if(hundred.includes(results[0])) SelectedItem = "100";
    if(nintyFive.includes(results[0])) SelectedItem = "95";
    if(twentySeven.includes(results[0])) SelectedItem = "27"
    if(thirteen.includes(results[0])) SelectedItem = "13"
    if(thirtyNine.includes(results[0])) SelectedItem = "39"
    if(sixty.includes(results[0])) SelectedItem = "60"
    if(eleven.includes(results[0])) SelectedItem = "11";

    box.style.setProperty("transition","all ease 6s");
    box.style.transform = "rotate(" + results[0] + "deg)";
    element.classList.remove("animate");
    setTimeout(function(){
        element.classList.add("animate");
    },5000);
    setTimeout(function(){
        applause.play()
        Swal.fire({
            title: '<strong>Horray!!!!!!</strong>',
            html:
              'You Have Won' +SelectedItem+'$'+  `<a href="#">Collect Your Reward</a> `,
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText:
              '<i class="fa fa-thumbs-up"></i> Great!',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            cancelButtonText:
              '<i class="fa fa-thumbs-down"></i>',
            cancelButtonAriaLabel: 'Thumbs down'
          })
    },5500)

    setTimeout(function(){
        box.style.setProperty("transition","initial");
        box.style.transform = "rotate(90deg)";
    },5000)
}