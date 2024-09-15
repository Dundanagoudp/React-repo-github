// passing jsx as props in react

function Profile(){
      return(
            <div>
                  <h1>profile card challenge</h1>
                  <ProfileCard 
                  name="chetan"
                  age={24}
                  gretting={
                        <div>
                              <strong>hi toady is the good day for me</strong>
                        </div>
                  }
                  >
                        <p>hobbies: reading, writing</p>
                        <button>Contact Us</button>

                  </ProfileCard>
                  <ProfileCard 
                  name="mallu"
                  age={23}
                  gretting={
                        <div>
                              <strong>hi toady is the good day for me</strong>
                        </div>
                  }
                  >
                        <p>hobbies: reading, writing</p>
                        <button>Contact Us</button>

                  </ProfileCard>
            </div>
      );
}

export default Profile;

function ProfileCard (props) {
      const {name,age,gretting,children}=props;
      return(
<>
<h2>name:{name}</h2>
<p>age:{age}</p>
<p>{gretting}</p>
<div>{children}</div>
{/* <button>conatct us</button> */}

</>
      );
}