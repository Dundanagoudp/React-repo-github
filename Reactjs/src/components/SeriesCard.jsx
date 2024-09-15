import styles from "./Netflix.module.css";
import styled from "styled-components";

export const SeriesCard = (props) => {
      // Destructure data from props
      const { id, img_url, name, rating, watch_url, genere } = props.data; // Fixed the missing destructure for 'genere'
    
      // const btn_clss = {
        // padding: "1.2rem 2.4rem",
        // fontSize: "1.6rem",
        // border: "none", // Fixed the border property
        // backgroundColor: `${rating >= 7.9 ? "#7dcea0" : "#f7dc6f"}`, // Corrected backgroundColor
        // color: "black",
        // fontWeight: "bold", // Added font weight
        // cursor: "pointer", // Added pointer cursor
      // };

      // style object 
      // const BtnChetan = styled.button({
      //   padding: "1.2rem 2.4rem",
      //   fontSize: "1.6rem",
      //   border: "none", // Fixed the border property
      //   backgroundColor: `${rating >= 7.9 ? "#7dcea0" : "#f7dc6f"}`, // Corrected backgroundColor
      //   color: "black",
      //   fontWeight: "bold", // Added font weight
      //   cursor: "pointer", // Added pointer cursor
      // })

      // template literals
  const BtnChetan = styled.button`
  padding: 1.2rem 2.4rem;
  font-size: 1.6rem;
  border: none;
  background-color: ${(props) => (props.rating >= 7.9 ? "#7dcea0" : "#f7dc6f")}; // Use props to access the 'rating' value
  color: black;
  font-weight: bold;
  cursor: pointer;
`;

const Rating =styled.h4`
  font-size: 1.6rem;
  color: #7dcea0;
  text-transform:capitalize;

`;
const StyledParagraph = styled.p`
  font-size: 1.875rem; /* text-3xl */
  font-weight: bold; /* font-bold */
  text-decoration: underline; /* underline */
`;
      

      const Ratingclass = rating >= 7.9 ? styles.super_hit : styles.average;
      return (
        <li className={styles.card}> 
          <div>
            <img src={img_url} alt="mobiles.png" width="40%" height="50%" />
          </div>
          <div className={styles["card-content"]}>
            
          <h1>Name: {name}</h1>
          <Rating>Rating:
             <span className={`${styles.rating} ${Ratingclass}`}
             > {rating}</span>
             </Rating>
          {/* <p className="text-3xl font-bold underline">
            Lorem ipsum dolor sit amet, 
          </p> */}
          <StyledParagraph>
            Lorem ipsum dolor sit amet, 
          </StyledParagraph>
          <p>Genere: {genere.join(", ")}</p> 
          <a href={watch_url} target="_blank" rel="noopener noreferrer">
            {/* <button style={btn_clss}>Watch Now</button> */}
            <BtnChetan rating={rating}>Watch Now</BtnChetan>

           
          </a>
          </div>
        </li>
      );
    };
    