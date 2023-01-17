require 'rails_helper'

RSpec.describe User, type: :model do
  # pending "add some examples to (or delete) #{__FILE__}"

  subject { User.new(username: "Kante", location: "Nairobi", email: "kante@gmail.com", password_digest: "222a", phone_number: "0432332112", role: "user" )}
  
  it "is valid with valid attributes" do
    expect(subject).to be_valid
  end

  it "is not valid without a username" do
    subject.username=nil
    expect(subject).to_not be_valid
  end

  it "is not valid without a location" do
    subject.location=nil
    expect(subject).to_not be_valid
  end

  it "is not valid without a username" do
    subject.email=nil
    expect(subject).to_not be_valid
  end

  it "is not valid without a password_digest" do
    subject.password_digest=nil
    expect(subject).to_not be_valid
  end

  it "is not valid without a vacancy note" do
    subject.phone_number=nil
    expect(subject).to_not be_valid
  end

  it "is not valid without an role" do
    subject.role=nil
    expect(subject).to_not be_valid
  end

end
