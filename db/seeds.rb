# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Unit.destroy_all
Apartment.destroy_all
Review.destroy_all


user1=User.create(username: "kante", location: "Kwale", email: "kante@kante", password: "1234", phone_number: 12347890,role:"user")
user2=User.create(username: "kente", location: "Kilifi", email: "kente@kante", password: "4567", phone_number: 12347890,role:"user")
user3=User.create(username: "kinte", location: "Mombasa", email: "kinte@kante", password: "0002a", phone_number: 12347890,role:"lister")
user4=User.create(username: "kunte", location: "Msambweni", email: "kunte@kante", password: "0003a", phone_number: 12347890,role:"lister")

# unit1=Unit.create(unit_number:5500,property_name:"Chandaria",property_type:"Residential",price:8000,location:"Nairobi",image_url:"https://images.pexels.com/photos/534228/pexels-photo-534228.jpeg?auto=compress&cs=tinysrgb&w=600",unit_url:"https://images.pexels.com/photos/3288102/pexels-photo-3288102.png?auto=compress&cs=tinysrgb&w=600",category:"bedsitter",user_id:user1.id,lister_id:lister1.id)
# unit2=Unit.create(unit_number:5501,property_name:"Flaqo",property_type:"Residential",price:10000,location:"Nairobi",image_url:"https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&w=600",unit_url:"https://media.istockphoto.com/id/153534693/photo/the-cozy-living-room.jpg?s=612x612&w=0&k=20&c=kBPeXOPM2qiQEbhfbC5M5JJCmD7IZxznssPaLhNomuo=",category:"1bedroom",user_id:user2.id,lister_id:lister2.id)
# unit3=Unit.create(unit_number:5502,property_name:"Elgon",property_type:"Residential",price:15000,location:"Nakuru",image_url:"https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=600",unit_url:"https://images.pexels.com/photos/3288100/pexels-photo-3288100.png?auto=compress&cs=tinysrgb&w=600",category:"2bedroom",user_id:user3.id,lister_id:lister3.id)
# unit4=Unit.create(unit_number:5503,property_name:"Elmoro",property_type:"Hostel",price:10000,location:"Nakuru",image_url:"https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=600",unit_url:"https://images.pexels.com/photos/6523302/pexels-photo-6523302.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",category:"3bedroom",user_id:user4.id,lister_id:lister4.id)
# unit4=Unit.create(unit_number:5502,property_name:"Eljuok",property_type:"Residential",price:15000,location:"Nakuru",image_url:"https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=600",unit_url:"https://media.istockphoto.com/id/1399793821/photo/3d-render-of-modern-living-room.jpg?s=612x612&w=0&k=20&c=PygE407XpIloAAYFm4ffsygChM6clbiJbegT0dwsmnw=",category:"2bedroom",user_id:user3.id,lister_id:lister3.id)
# unit5=Unit.create(unit_number:5503,property_name:"Siandate",property_type:"Hostel",price:10000,location:"Narok",image_url:"https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=600",unit_url:"https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=600",category:"3bedroom",user_id:user4.id,lister_id:lister4.id)
# unit4=Unit.create(unit_number:5503,property_name:"Elmoro",property_type:"Hostel",price:10000,location:"Nakuru",image_url:"https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=600",unit_url:"https://images.pexels.com/photos/6523302/pexels-photo-6523302.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",category:"3bedroom",user_id:user4.id,lister_id:lister4.id)
# unit4=Unit.create(unit_number:5502,property_name:"Eljuok",property_type:"Residential",price:15000,location:"Nakuru",image_url:"https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=600",unit_url:"https://media.istockphoto.com/id/1399793821/photo/3d-render-of-modern-living-room.jpg?s=612x612&w=0&k=20&c=PygE407XpIloAAYFm4ffsygChM6clbiJbegT0dwsmnw=",category:"2bedroom",user_id:user3.id,lister_id:lister3.id)
# unit5=Unit.create(unit_number:5503,property_name:"Siandate",property_type:"Hostel",price:10000,location:"Narok",image_url:"https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=600",unit_url:"https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=600",category:"3bedroom",user_id:user4.id,lister_id:lister4.id)
# unit1=Unit.create(unit_number:5500,property_name:"Chandaria",property_type:"Residential",price:8000,location:"Nairobi",image_url:"https://images.pexels.com/photos/534228/pexels-photo-534228.jpeg?auto=compress&cs=tinysrgb&w=600",unit_url:"https://images.pexels.com/photos/3288102/pexels-photo-3288102.png?auto=compress&cs=tinysrgb&w=600",category:"bedsitter",user_id:user1.id,lister_id:lister1.id)
# unit2=Unit.create(unit_number:5501,property_name:"Flaqo",property_type:"Residential",price:10000,location:"Nairobi",image_url:"https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&w=600",unit_url:"https://media.istockphoto.com/id/153534693/photo/the-cozy-living-room.jpg?s=612x612&w=0&k=20&c=kBPeXOPM2qiQEbhfbC5M5JJCmD7IZxznssPaLhNomuo=",category:"1bedroom",user_id:user2.id,lister_id:lister2.id)
# unit3=Unit.create(unit_number:5502,property_name:"Elgon",property_type:"Residential",price:15000,location:"Nakuru",image_url:"https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=600",unit_url:"https://images.pexels.com/photos/3288100/pexels-photo-3288100.png?auto=compress&cs=tinysrgb&w=600",category:"2bedroom",user_id:user3.id,lister_id:lister3.id)


apartment1=Apartment.create(apartment_name:"Chandaria",apartment_type:"Hostel",location:"Embakasi",image_url:"https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=600",user_id:user3.id)
apartment2=Apartment.create(apartment_name:"Siandate",apartment_type:"Hostel",location:"Ngong",image_url:"https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=600",user_id:user4.id)
apartment3=Apartment.create(apartment_name:"Elgon",apartment_type:"Residential",location:"Ruaka",image_url:"https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=600",user_id:user3.id)
apartment4=Apartment.create(apartment_name:"Elmoro",apartment_type:"Residenatial",location:"South B",image_url:"https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=600",user_id:user3.id)
apartment5=Apartment.create(apartment_name:"Siandate",apartment_type:"Hostel",location:"Ngong",image_url:"https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=600",user_id:user4.id)
apartment6=Apartment.create(apartment_name:"Eljuok",apartment_type:"Residential",location:"Ruaka",image_url:"https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=600",user_id:user4.id)

unit1=Unit.create(unit_number:5500,price:8000,image_url:"https://images.pexels.com/photos/3288102/pexels-photo-3288102.png?auto=compress&cs=tinysrgb&w=600",category:"bedsitter",apartment_id:apartment1.id,user_id:user3.id)
unit7=Unit.create(unit_number:5507,price:8000,image_url:"https://images.pexels.com/photos/3753436/pexels-photo-3753436.jpeg?auto=compress&cs=tinysrgb&w=400",category:"2bedroom",apartment_id:apartment1.id,user_id:user3.id)
unit9=Unit.create(unit_number:5510,price:8000,image_url:"https://images.pexels.com/photos/13581811/pexels-photo-13581811.jpeg?auto=compress&cs=tinysrgb&w=400",category:"1bedroom",apartment_id:apartment1.id,user_id:user3.id)

unit11=Unit.create(unit_number:5511,price:8000,image_url:"https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=400",category:"1bedroom",apartment_id:apartment1.id,user_id:user3.id)
unit2=Unit.create(unit_number:5501,price:10000,image_url:"https://images.pexels.com/photos/3288102/pexels-photo-3288102.png?auto=compress&cs=tinysrgb&w=600",category:"1bedroom",apartment_id:apartment1.id,user_id:user3.id)
unit3=Unit.create(unit_number:5502,price:15000,image_url:"https://images.pexels.com/photos/3288100/pexels-photo-3288100.png?auto=compress&cs=tinysrgb&w=600",category:"2bedroom",apartment_id:apartment2.id,user_id:user4.id)
unit4=Unit.create(unit_number:5503,price:10000,image_url:"https://images.pexels.com/photos/6523302/pexels-photo-6523302.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",category:"3bedroom",apartment_id:apartment3.id,user_id:user4.id)
unit5=Unit.create(unit_number:5504,price:30000,image_url:"https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=600",category:"3bedroom",apartment_id:apartment3.id,user_id:user4.id)
unit6=Unit.create(unit_number:5505,price:25000,image_url:"https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=600",category:"3bedroom",apartment_id:apartment3.id,user_id:user4.id)

# unit1=Unit.create(unit_number:5500,price:8000,image_url:"https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",category:"bedsitter",apartment_id:apartment1.id,user_id:user3.id)
# unit2=Unit.create(unit_number:5501,price:10000,image_url:"https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",category:"1bedroom",apartment_id:apartment1.id,user_id:user3.id)
# unit3=Unit.create(unit_number:5502,price:15000,image_url:"https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",category:"2bedroom",apartment_id:apartment2.id,user_id:user4.id)
# unit4=Unit.create(unit_number:5503,price:10000,image_url:"https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",category:"3bedroom",apartment_id:apartment3.id,user_id:user4.id)

# unit1=Unit.create(unit_number:5500,price:8000,image_url:"https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",category:"bedsitter",apartment_id:apartment1.id,user_id:user3.id)
# unit2=Unit.create(unit_number:5501,price:10000,image_url:"https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",category:"1bedroom",apartment_id:apartment1.id,user_id:user3.id)
# unit3=Unit.create(unit_number:5502,price:15000,image_url:"https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",category:"2bedroom",apartment_id:apartment2.id,user_id:user4.id)
# unit4=Unit.create(unit_number:5503,price:10000,image_url:"https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",category:"3bedroom",apartment_id:apartment3.id,user_id:user4.id)


review1=Review.create(user_id:user1.id,description:"The owner is very cooperative",unit_id:unit1.id)
review2=Review.create(user_id:user2.id,description:"I liked my stay in this apartment. The compound was clean and security was tight",unit_id:unit2.id)
review3=Review.create(user_id:user3.id,description:"The rooms are generally clean, painted in warm color, and the neighbors are so friendly ",unit_id:unit3.id)
review1=Review.create(user_id:user1.id,description:"Security of this premise is top notch. I would give the apartment five star rating",unit_id:unit4.id)
review2=Review.create(user_id:user2.id,description:"I liked care taker's hospitality. Very understanding",unit_id:unit5.id)
review3=Review.create(user_id:user3.id,description:"This is the best best place to live in Nairobi. I like the quality of the rooms and their affordability",unit_id:unit5.id)

review3=Review.create(user_id:user3.id,description:"The rooms are of high quality and the rent is pocket friendly",unit_id:unit7.id)
review3=Review.create(user_id:user3.id,description:"The management is quite understanding with regards to rent payment",unit_id:unit9.id)
review3=Review.create(user_id:user3.id,description:"I like the level of security and serenity of the surroundings",unit_id:unit11.id)
