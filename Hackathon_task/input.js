const service = [
    {
        id: 0,
        image: 'images/matric.jpg',
        title: 'Matriculation',
        charge: 120,
        contact: 'http://127.0.0.1:5500/Hackathon_task/mat-sch.html',
        btnid: 'id1'
    },
    {
        id: 1,
        image: 'images/12th.jpg',
        title: 'Intermediate',
        charge: 150,
        contact: 'http://127.0.0.1:5500/Hackathon_task/int-sch.html#',
        btnid: 'id2'

    },
    {
        id: 2,
        image: 'images/be.jpg',
        title: 'Bachelors',
        charge: 30,
        contact: 'http://127.0.0.1:5500/Hackathon_task/bachelors.html',
        btnid: 'id3'

    },
    {
        id: 3,
        image: 'images/ba.jpg',
        title: 'Masters',
        charge: 30,
        contact: 'http://127.0.0.1:5500/Hackathon_task/masters.html',
        btnid: 'id3'

    },
    {
        id: 4,
        image: 'images/research.jpg',
        title: 'Research',
        charge: 50,
        contact: 'http://127.0.0.1:5500/Hackathon_task/Research.html',
        btnid: 'id4'

    }
    
]

const category = [...new Set(service.map((item) => { return item }))];
document.getElementById("input1").addEventListener("keyup", (e) => {
    const searchdata = e.target.value.toLowerCase();
    const filterdata = category.filter((item) => {
        return (
            item.title.toLocaleLowerCase().includes(searchdata)
        )
    })
    displayitem(filterdata);
});

const displayitem = (items) => {
    document.getElementById("root").innerHTML = items.map((item) => {
        var { image, title, charge, contact, btnid } = item;
        return (
            `<div class="box">
        <div class="image-box"
        <a href=""><img src = "${image}" alt="image loading.." class="imgpic" width="200"></a>
        </div>
        <div class="bottom">
            <a href="${contact}" target="_blank"><h2>${title}</h2></a>
            <h3>Rs ${charge}.00 per hour</h3>
        </div>
    </div>
        <br><br>`
        )
    }).join("")

}
displayitem(searchdata);