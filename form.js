class Form{
    constructor(){
        this.title = createElement("h1")
        this.input = createInput("name")
        this.button = createButton("Start")
        this.greeting = createElement("h2")
    }

    display(){
       
        this.title.position(130,0)
       this.title.html("Car-Racing")
        this.input.position(130,160)
      
        this.button.position(250,200)
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name =  this.input.value()
            playerCount++
            player.index = playerCount
            player.updateCount(playerCount)
            player.updateInfo()
           
            this.greeting.position(130,160)
            this.greeting.html("Hello "+player.name)
        })
    }
}