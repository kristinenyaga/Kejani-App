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
Requestunit.destroy_all


user1=User.create(username: "kante", location: "Kwale", email: "kante@kante", password: "1234", phone_number: 12347890,role:"user")
user2=User.create(username: "kente", location: "Kilifi", email: "kente@kante", password: "4567", phone_number: 12347890,role:"user")
user3=User.create(username: "kinte", location: "Mombasa", email: "kinte@kante", password: "0002a", phone_number: 12347890,role:"lister")
user4=User.create(username: "kunte", location: "Msambweni", email: "kunte@kante", password: "0003a", phone_number: 12347890,role:"lister")


apartment1=Apartment.create(apartment_name:"Chandaria",apartment_type:"Hostel",location:"Embakasi",image_url:"https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=600",user_id:user3.id)
apartment2=Apartment.create(apartment_name:"Siandate",apartment_type:"Hostel",location:"Ngong",image_url:"https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=600",user_id:user4.id)
apartment3=Apartment.create(apartment_name:"Elgon",apartment_type:"Residential",location:"Ruaka",image_url:"https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=600",user_id:user3.id)
apartment4=Apartment.create(apartment_name:"Elmoro",apartment_type:"Residenatial",location:"South B",image_url:"https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=600",user_id:user3.id)
apartment5=Apartment.create(apartment_name:"Siandate",apartment_type:"Hostel",location:"Ngong",image_url:"https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=600",user_id:user4.id)
apartment6=Apartment.create(apartment_name:"Eljuok",apartment_type:"Residential",location:"Ruaka",image_url:"https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=600",user_id:user4.id)

unit1=Unit.create(unit_number:5500,price:8000,image_url:"https://images.pexels.com/photos/3288102/pexels-photo-3288102.png?auto=compress&cs=tinysrgb&w=600",category:"bedsitter",apartment_id:apartment1.id,user_id:user3.id)
unit2=Unit.create(unit_number:5501,price:10000,image_url:"https://images.pexels.com/photos/3288102/pexels-photo-3288102.png?auto=compress&cs=tinysrgb&w=600",category:"1bedroom",apartment_id:apartment1.id,user_id:user3.id)
unit3=Unit.create(unit_number:5502,price:15000,image_url:"https://images.pexels.com/photos/3288100/pexels-photo-3288100.png?auto=compress&cs=tinysrgb&w=600",category:"2bedroom",apartment_id:apartment2.id,user_id:user4.id)
unit4=Unit.create(unit_number:5503,price:10000,image_url:"https://images.pexels.com/photos/6523302/pexels-photo-6523302.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",category:"3bedroom",apartment_id:apartment3.id,user_id:user4.id)
unit5=Unit.create(unit_number:5504,price:30000,image_url:"https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=600",category:"3bedroom",apartment_id:apartment3.id,user_id:user3.id)
unit6=Unit.create(unit_number:5505,price:25000,image_url:"https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=600",category:"3bedroom",apartment_id:apartment3.id,user_id:user3.id)



review1=Review.create(user_id:user1.id,description:"the owner was very cooperative",unit_id:unit1.id)
review2=Review.create(user_id:user2.id,description:"the owner was very cooperative",unit_id:unit2.id)
review3=Review.create(user_id:user3.id,description:"the owner was very cooperative",unit_id:unit3.id)

requestunit1=Requestunit.create(unit_number:5500,username:"Joan Ndirangu",email:"joan@gmail.com",phone_number:"0723345678",category:"bedsitter",location:"Embakasi",user_id:user3.id)
requestunit2=Requestunit.create(unit_number:5500,username:"Samson Okola",email:"samson@gmail.com",phone_number:"0734456543",category:"bedsitter",location:"Embakasi",user_id:user3.id)
requestunit3=Requestunit.create(unit_number:5501,username:"Judy Machoka",email:"judy@gmail.com",phone_number:"0723343564",category:"1bedroom",location:"Embakasi",user_id:user3.id)
requestunit4=Requestunit.create(unit_number:5501,username:"Esther Mutheu",email:"esther@gmail.com",phone_number:"0792043520",category:"1bedroom",location:"Embakasi",user_id:user3.id)
requestunit5=Requestunit.create(unit_number:5502,username:"Ivy Temi",email:"ivy@gmail.com",phone_number:"076502154",category:"2bedroom",location:"Ngong",user_id:user4.id)
requestunit6=Requestunit.create(unit_number:5502,username:"Olivia Janet",email:"olivia@gmail.com",phone_number:"0721145890",category:"2bedroom",location:"Ngong",user_id:user4.id)
requestunit7=Requestunit.create(unit_number:5503,username:"Angela Muite",email:"angela@gmail.com",phone_number:"0721143506",category:"3bedroom",location:"Ruaka",user_id:user4.id)
requestunit8=Requestunit.create(unit_number:5503,username:"Lucy Mwakazi",email:"lucy@gmail.com",phone_number:"0745143590",category:"3bedroom",location:"Ruaka",user_id:user4.id)
requestunit9=Requestunit.create(unit_number:5504,username:"Lincoln Muchiri",email:"lincoln@gmail.com",phone_number:"07344143506",category:"3bedroom",location:"Ruaka",user_id:user3.id)
requestunit10=Requestunit.create(unit_number:5504,username:"Beatrice Nduta",email:"beatrice@gmail.com",phone_number:"0727665506",category:"3bedroom",location:"Ruaka",user_id:user3.id)



