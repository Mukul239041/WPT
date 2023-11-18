class Person{
    constructor(pid,nm,mob){
        this.id=pid;
        this.name=nm;
        this.mobile=mob;
    }
    display(){
        document.write(this.id+","+this.name+","+this.mobile);
    }
}
class Employee extends Person{
    constructor(id,nm,mob,dept,desg){
        super(id,nm,mob);
        this.dept=dept;
        this.desg=desg;
    }

    display(){
        super.display();
        document.write(this.dept+","+this.desg)
    }
}

p1=new Person(12,'Rajan',"235245");
//p1.display();
e1=new Employee(13,"vvhg","33333","hr","mgr");
//e1.display()
