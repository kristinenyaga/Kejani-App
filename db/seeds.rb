# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Lister.destroy_all
User.destroy_all
Unit.destroy_all
Apartment.destroy_all
Review.destroy_all





user1=User.create(username: "kante", location: "Kwale", email: "kante@kante", password: "1234", phone_number: 12347890,role:"user")
user2=User.create(username: "kente", location: "Kilifi", email: "kente@kante", password: "4567", phone_number: 12347890,role:"user")
user3=User.create(username: "kinte", location: "Mombasa", email: "kinte@kante", password: "0002a", phone_number: 12347890,role:"lister")
user4=User.create(username: "kunte", location: "Msambweni", email: "kunte@kante", password: "0003a", phone_number: 12347890,role:"lister")

# lister1=Lister.create(username: "kante",image_url:"https://cdn.pixabay.com/photo/2022/06/21/16/18/orange-7276122__340.jpg",email: "kante@kante", password: "0000a", phone_no: 12347890)
# lister2=Lister.create(username: "kente", image_url:"https://cdn.pixabay.com/photo/2022/06/21/16/18/orange-7276122__340.jpg",email: "kente@kante", password: "0001a", phone_no: 12347890)

apartment1=Apartment.create(apartment_name:"Chandaria",apartment_type:"Hostel",location:"Embakasi",image_url:"https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",user_id:user3.id)
apartment2=Apartment.create(apartment_name:"Chandaria",apartment_type:"Hostel",location:"Kasarani",image_url:"https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1600",user_id:user4.id)
apartment3=Apartment.create(apartment_name:"Chandaria",apartment_type:"Hostel",location:"Ruaka",image_url:"https://images.pexels.com/photos/11916566/pexels-photo-11916566.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",user_id:user3.id)

unit1=Unit.create(unit_number:5500,price:8000,image_url:"https://cdn.pixabay.com/photo/2022/06/21/16/18/orange-7276122__340.jpg",category:"bedsitter",apartment_id:apartment1.id)
unit2=Unit.create(unit_number:5501,price:10000,image_url:"https://cdn.pixabay.com/photo/2022/06/21/16/18/orange-7276122__340.jpg",category:"1bedroom",apartment_id:apartment1.id)
unit3=Unit.create(unit_number:5502,price:15000,image_url:"https://cdn.pixabay.com/photo/2022/06/21/16/18/orange-7276122__340.jpg",category:"2bedroom",apartment_id:apartment2.id)
unit4=Unit.create(unit_number:5503,price:10000,image_url:"https://cdn.pixabay.com/photo/2022/06/21/16/18/orange-7276122__340.jpg",category:"3bedroom",apartment_id:apartment3.id)

review1=Review.create(description:"the owner was very cooperative",unit_id:unit1.id,user_id:user1.id)
review2=Review.create(description:"the owner was very cooperative",unit_id:unit2.id,user_id:user2.id)
review3=Review.create(description:"the owner was very cooperative",unit_id:unit3.id,user_id:user1.id)

