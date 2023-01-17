require 'rails_helper'

RSpec.describe Review, type: :model do
  # pending "add some examples to (or delete) #{__FILE__}"

  subject { Review.new(id: "1", user_id: "1", description: "Area security was tight", unit_id: "1" )}
  
  it "is valid with valid attributes" do
    expect(subject).to be_valid
  end

  it "is not valid without a user_id" do
    subject.user_id=nil
    expect(subject).to_not be_valid
  end

  it "is not valid without a description" do
    subject.description=nil
    expect(subject).to_not be_valid
  end

  it "is not valid without a user_id" do
    subject.unit_id=nil
    expect(subject).to_not be_valid
  end

end