
function Ship(length) {
    this.length = length;
    this.hit = 0
    this.ifSunk = false

    this.hit = () =>{
        hit += 1
        //maybe this.
    }

    this.isSunk = () => {
        //length 10
        //hit 10
        let x = true
        if(hit >= length){
            return x
        }
        x = false
        return x
    }
}

export default Ship;