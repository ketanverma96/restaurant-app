import React from "react";


const MenuCard = ({ menuData }) => {
    // console.log(menuData);
    const AddCard = (data) => {

        alert(data);
    };
    return (
        <div>
            <section className="main-card--cointainer">
                {menuData.map((curElem) => {
                    const { id, name, category, description, image } = curElem;
                    return (
                        <>
                            <div className="card-container" key={id}>
                                <div className="card">
                                    <div className="card-body">
                                        <span className="card-number card-circle subtle">{id}</span>
                                        <span className="card-utthor subtle">{category}</span>
                                        <h2 className="card-title">{name}</h2>
                                        <span className="card-description subtle"> {description} </span>
                                        <div className="card-read">Read</div>
                                    </div>
                                    <img src={image} alt="images" className='card-media' />

                                    <button type="submit" className="card-tag subtle" onClick={() => AddCard(description)} >Order Now</button>

                                </div>
                            </div>

                        </>
                    );
                })}
            </section>
        </div>
    );

};

export default MenuCard;