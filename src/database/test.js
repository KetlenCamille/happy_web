const Database = require('./db.js')
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {
    //Inserindo dados na tabela
   /* await saveOrphanage(db, {
        lat:"-25.4504826", 
        lng: "-49.3169206",
        name: "Lar dos Meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
        whatsapp: "99875-3258",
        images: [
            "https://images.unsplash.com/photo-1600818272779-cfa6145222f0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1597553161987-5993dc9da24e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciencia para dar.",
        opening_hours: "Horário de visitas Das 11h até 18h",
        open_on_weekends: "0"
    })*/

    //Consultando dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //Consultando somente um Orphanage, pelo id
    //const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    //console.log(orphanage)

    //Deletando dados da tabela
    //await db.run("DELETE FROM orphanages")
    //await db.run("DELETE FROM orphanages WHERE id='4'")
})