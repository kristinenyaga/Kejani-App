require 'rails_helper'

RSpec.describe Unit, type: :model do
  # pending "add some examples to (or delete) #{__FILE__}"

  subject { Unit.new(unit_number: "8888", price: "88888", category: "Hostel", user_id: "2", occuppied: "vacant", apartment_id: "3",  image_url: "https://www.bing.com/images/search?view=detailV2&ccid=X52F43%2bZ&id=8AB4BB040F37CEB1E7FEDC0E7CB2D244805A6011&thid=OIP.X52F43-ZEv01zY85DKc5AAHaF7&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.5f9d85e37f9912fd35cd8f390ca73900%3frik%3dEWBagETSsnwO3A%26riu%3dhttp%253a%252f%252flandmarkhunter.com%252fphotos%252f62%252f47%252f624776-L.jpg%26ehk%3d7bgvC2HQcrl8Hxhv66usSh2k10RDzy6B6ET%252fDVUTCco%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=1281&expw=1600&q=house&simid=608004787967915384&FORM=IRPRST&ck=2B122DCEAD3D1334E92643984D8785E3&selectedIndex=0&ajaxhist=0&ajaxserp=0" )}
  
  it "is valid with valid attributes" do
    expect(subject).to be_valid
  end

  it "is not valid without a unit_number" do
    subject.unit_number=nil
    expect(subject).to_not be_valid
  end

  it "is not valid without a price" do
    subject.price=nil
    expect(subject).to_not be_valid
  end

  it "is not valid without a unit_number" do
    subject.category=nil
    expect(subject).to_not be_valid
  end

  it "is not valid without a user_id" do
    subject.user_id=nil
    expect(subject).to_not be_valid
  end

  it "is not valid without a vacancy note" do
    subject.occuppied=nil
    expect(subject).to_not be_valid
  end

  it "is not valid without an apartment_id" do
    subject.apartment_id=nil
    expect(subject).to_not be_valid
  end
  
  it "is not valid without an image" do
    subject.image_url=nil
    expect(subject).to_not be_valid
  end

end

