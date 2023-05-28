import React from "react";
import ProductCard from "./productCard";
function GeneralProducts() {
  const images = [
    {
      name: "rounded neck black shirt, web developer",
      rating: 3.5,
      size: "medium",
      url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAG1BMVEXMzMwAAACysrIZGRmZmZkzMzNMTExmZmZ/f3/jLKqNAAACIElEQVR4nO3X6XKDMAxGUfACfv8nLhjwhtgmIu1M7/nVqEFfZRuSdh0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/HHGGLl8v/r7gWGw/cyO1fvNaG9Xn3kn0C1NFyHXx1wdr6qPvBUY+l5qvDSwtm4hV595K3DqO4Rp20yI71430MUL53Js5c6qzwd5JdDlw2fzChU/zivoz6oPfSFwfu+whJVX+W3d5OoH3go06bqx3MewHU+5WhvK7TfD+4Hnfefp92W5Ws9RHmRjLw6DQqDIpZ2ezqbN9e2VXG07pElMccLfCpSNafPq4beFkauVkCeJc5yfBYVAUbqdTFqpaFg6yNWjSW7MoRIoyM8IoYM5qh5McmcOncA9m06Fq/+ItYNclScJN+bQCmwNef7PFmj7DnI1h1pgbb7xrFHpG27NoRh41Lbt4MV77/ghEu+Pq29imoFN2yK6fu5tD3C5ejDHxSSagcdtm+HFD9ompZljuJhEM7Awx1rXFNLr9PCQq9IcY/nJ+HJgEe3L45ouSqcztZOr4hzd2SSqgU20bx4H+REfu9mzqjjHySSqgVnM82ZTVJe9D80/N/uqPMfhJKqBzVIUtttp3v3eeh9/nbZXrtaD5HMc2gOkH3jdNx7JVfOhtK+Wk5T3YxDmUA687ts5v1aq0yFXn/h64LS8bnKzquLrgQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPjPfgCFQQ9yD5vluwAAAABJRU5ErkJggg==",
      price: 420,
      reviews: 5,
    },
    {
      name: "rounded neck black shirt, web developer",
      rating: 3.5,
      size: "medium",
      url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAG1BMVEXMzMwAAACysrIZGRmZmZkzMzNMTExmZmZ/f3/jLKqNAAACIElEQVR4nO3X6XKDMAxGUfACfv8nLhjwhtgmIu1M7/nVqEFfZRuSdh0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/HHGGLl8v/r7gWGw/cyO1fvNaG9Xn3kn0C1NFyHXx1wdr6qPvBUY+l5qvDSwtm4hV595K3DqO4Rp20yI71430MUL53Js5c6qzwd5JdDlw2fzChU/zivoz6oPfSFwfu+whJVX+W3d5OoH3go06bqx3MewHU+5WhvK7TfD+4Hnfefp92W5Ws9RHmRjLw6DQqDIpZ2ezqbN9e2VXG07pElMccLfCpSNafPq4beFkauVkCeJc5yfBYVAUbqdTFqpaFg6yNWjSW7MoRIoyM8IoYM5qh5McmcOncA9m06Fq/+ItYNclScJN+bQCmwNef7PFmj7DnI1h1pgbb7xrFHpG27NoRh41Lbt4MV77/ghEu+Pq29imoFN2yK6fu5tD3C5ejDHxSSagcdtm+HFD9ompZljuJhEM7Awx1rXFNLr9PCQq9IcY/nJ+HJgEe3L45ouSqcztZOr4hzd2SSqgU20bx4H+REfu9mzqjjHySSqgVnM82ZTVJe9D80/N/uqPMfhJKqBzVIUtttp3v3eeh9/nbZXrtaD5HMc2gOkH3jdNx7JVfOhtK+Wk5T3YxDmUA687ts5v1aq0yFXn/h64LS8bnKzquLrgQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPjPfgCFQQ9yD5vluwAAAABJRU5ErkJggg==",
      price: 490,
      reviews: 5,
      reviews: 5,
    },
    {
      name: "rounded neck black shirt, web developer",
      rating: 3.5,
      size: "medium",
      url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAG1BMVEXMzMwAAACysrIZGRmZmZkzMzNMTExmZmZ/f3/jLKqNAAACIElEQVR4nO3X6XKDMAxGUfACfv8nLhjwhtgmIu1M7/nVqEFfZRuSdh0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/HHGGLl8v/r7gWGw/cyO1fvNaG9Xn3kn0C1NFyHXx1wdr6qPvBUY+l5qvDSwtm4hV595K3DqO4Rp20yI71430MUL53Js5c6qzwd5JdDlw2fzChU/zivoz6oPfSFwfu+whJVX+W3d5OoH3go06bqx3MewHU+5WhvK7TfD+4Hnfefp92W5Ws9RHmRjLw6DQqDIpZ2ezqbN9e2VXG07pElMccLfCpSNafPq4beFkauVkCeJc5yfBYVAUbqdTFqpaFg6yNWjSW7MoRIoyM8IoYM5qh5McmcOncA9m06Fq/+ItYNclScJN+bQCmwNef7PFmj7DnI1h1pgbb7xrFHpG27NoRh41Lbt4MV77/ghEu+Pq29imoFN2yK6fu5tD3C5ejDHxSSagcdtm+HFD9ompZljuJhEM7Awx1rXFNLr9PCQq9IcY/nJ+HJgEe3L45ouSqcztZOr4hzd2SSqgU20bx4H+REfu9mzqjjHySSqgVnM82ZTVJe9D80/N/uqPMfhJKqBzVIUtttp3v3eeh9/nbZXrtaD5HMc2gOkH3jdNx7JVfOhtK+Wk5T3YxDmUA687ts5v1aq0yFXn/h64LS8bnKzquLrgQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPjPfgCFQQ9yD5vluwAAAABJRU5ErkJggg==",
      price: 491,
      reviews: 5,
    },
    {
      name: "rounded neck black shirt, web developer",
      rating: 3.5,
      size: "medium",
      url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAG1BMVEXMzMwAAACysrIZGRmZmZkzMzNMTExmZmZ/f3/jLKqNAAACIElEQVR4nO3X6XKDMAxGUfACfv8nLhjwhtgmIu1M7/nVqEFfZRuSdh0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/HHGGLl8v/r7gWGw/cyO1fvNaG9Xn3kn0C1NFyHXx1wdr6qPvBUY+l5qvDSwtm4hV595K3DqO4Rp20yI71430MUL53Js5c6qzwd5JdDlw2fzChU/zivoz6oPfSFwfu+whJVX+W3d5OoH3go06bqx3MewHU+5WhvK7TfD+4Hnfefp92W5Ws9RHmRjLw6DQqDIpZ2ezqbN9e2VXG07pElMccLfCpSNafPq4beFkauVkCeJc5yfBYVAUbqdTFqpaFg6yNWjSW7MoRIoyM8IoYM5qh5McmcOncA9m06Fq/+ItYNclScJN+bQCmwNef7PFmj7DnI1h1pgbb7xrFHpG27NoRh41Lbt4MV77/ghEu+Pq29imoFN2yK6fu5tD3C5ejDHxSSagcdtm+HFD9ompZljuJhEM7Awx1rXFNLr9PCQq9IcY/nJ+HJgEe3L45ouSqcztZOr4hzd2SSqgU20bx4H+REfu9mzqjjHySSqgVnM82ZTVJe9D80/N/uqPMfhJKqBzVIUtttp3v3eeh9/nbZXrtaD5HMc2gOkH3jdNx7JVfOhtK+Wk5T3YxDmUA687ts5v1aq0yFXn/h64LS8bnKzquLrgQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPjPfgCFQQ9yD5vluwAAAABJRU5ErkJggg==",
      price: 421,
    },
    {
      name: "rounded neck black shirt, web developer",
      rating: 3.5,
      size: "medium",
      url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAG1BMVEXMzMwAAACysrIZGRmZmZkzMzNMTExmZmZ/f3/jLKqNAAACIElEQVR4nO3X6XKDMAxGUfACfv8nLhjwhtgmIu1M7/nVqEFfZRuSdh0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/HHGGLl8v/r7gWGw/cyO1fvNaG9Xn3kn0C1NFyHXx1wdr6qPvBUY+l5qvDSwtm4hV595K3DqO4Rp20yI71430MUL53Js5c6qzwd5JdDlw2fzChU/zivoz6oPfSFwfu+whJVX+W3d5OoH3go06bqx3MewHU+5WhvK7TfD+4Hnfefp92W5Ws9RHmRjLw6DQqDIpZ2ezqbN9e2VXG07pElMccLfCpSNafPq4beFkauVkCeJc5yfBYVAUbqdTFqpaFg6yNWjSW7MoRIoyM8IoYM5qh5McmcOncA9m06Fq/+ItYNclScJN+bQCmwNef7PFmj7DnI1h1pgbb7xrFHpG27NoRh41Lbt4MV77/ghEu+Pq29imoFN2yK6fu5tD3C5ejDHxSSagcdtm+HFD9ompZljuJhEM7Awx1rXFNLr9PCQq9IcY/nJ+HJgEe3L45ouSqcztZOr4hzd2SSqgU20bx4H+REfu9mzqjjHySSqgVnM82ZTVJe9D80/N/uqPMfhJKqBzVIUtttp3v3eeh9/nbZXrtaD5HMc2gOkH3jdNx7JVfOhtK+Wk5T3YxDmUA687ts5v1aq0yFXn/h64LS8bnKzquLrgQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPjPfgCFQQ9yD5vluwAAAABJRU5ErkJggg==",
      price: 423,
      reviews: 5,
    },
    {
      name: "rounded neck black shirt, web developer",
      rating: 3.5,
      size: "medium",
      url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAG1BMVEXMzMwAAACysrIZGRmZmZkzMzNMTExmZmZ/f3/jLKqNAAACIElEQVR4nO3X6XKDMAxGUfACfv8nLhjwhtgmIu1M7/nVqEFfZRuSdh0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/HHGGLl8v/r7gWGw/cyO1fvNaG9Xn3kn0C1NFyHXx1wdr6qPvBUY+l5qvDSwtm4hV595K3DqO4Rp20yI71430MUL53Js5c6qzwd5JdDlw2fzChU/zivoz6oPfSFwfu+whJVX+W3d5OoH3go06bqx3MewHU+5WhvK7TfD+4Hnfefp92W5Ws9RHmRjLw6DQqDIpZ2ezqbN9e2VXG07pElMccLfCpSNafPq4beFkauVkCeJc5yfBYVAUbqdTFqpaFg6yNWjSW7MoRIoyM8IoYM5qh5McmcOncA9m06Fq/+ItYNclScJN+bQCmwNef7PFmj7DnI1h1pgbb7xrFHpG27NoRh41Lbt4MV77/ghEu+Pq29imoFN2yK6fu5tD3C5ejDHxSSagcdtm+HFD9ompZljuJhEM7Awx1rXFNLr9PCQq9IcY/nJ+HJgEe3L45ouSqcztZOr4hzd2SSqgU20bx4H+REfu9mzqjjHySSqgVnM82ZTVJe9D80/N/uqPMfhJKqBzVIUtttp3v3eeh9/nbZXrtaD5HMc2gOkH3jdNx7JVfOhtK+Wk5T3YxDmUA687ts5v1aq0yFXn/h64LS8bnKzquLrgQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPjPfgCFQQ9yD5vluwAAAABJRU5ErkJggg==",
      price: 423,
      reviews: 5,
    },
    {
      name: "rounded neck black shirt, web developer",
      rating: 3.5,
      size: "medium",
      url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAG1BMVEXMzMwAAACysrIZGRmZmZkzMzNMTExmZmZ/f3/jLKqNAAACIElEQVR4nO3X6XKDMAxGUfACfv8nLhjwhtgmIu1M7/nVqEFfZRuSdh0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/HHGGLl8v/r7gWGw/cyO1fvNaG9Xn3kn0C1NFyHXx1wdr6qPvBUY+l5qvDSwtm4hV595K3DqO4Rp20yI71430MUL53Js5c6qzwd5JdDlw2fzChU/zivoz6oPfSFwfu+whJVX+W3d5OoH3go06bqx3MewHU+5WhvK7TfD+4Hnfefp92W5Ws9RHmRjLw6DQqDIpZ2ezqbN9e2VXG07pElMccLfCpSNafPq4beFkauVkCeJc5yfBYVAUbqdTFqpaFg6yNWjSW7MoRIoyM8IoYM5qh5McmcOncA9m06Fq/+ItYNclScJN+bQCmwNef7PFmj7DnI1h1pgbb7xrFHpG27NoRh41Lbt4MV77/ghEu+Pq29imoFN2yK6fu5tD3C5ejDHxSSagcdtm+HFD9ompZljuJhEM7Awx1rXFNLr9PCQq9IcY/nJ+HJgEe3L45ouSqcztZOr4hzd2SSqgU20bx4H+REfu9mzqjjHySSqgVnM82ZTVJe9D80/N/uqPMfhJKqBzVIUtttp3v3eeh9/nbZXrtaD5HMc2gOkH3jdNx7JVfOhtK+Wk5T3YxDmUA687ts5v1aq0yFXn/h64LS8bnKzquLrgQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPjPfgCFQQ9yD5vluwAAAABJRU5ErkJggg==",
      price: 423,
      reviews: 5,
    },
    {
      name: "rounded neck black shirt, web developer",
      rating: 3.5,
      size: "medium",
      url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAG1BMVEXMzMwAAACysrIZGRmZmZkzMzNMTExmZmZ/f3/jLKqNAAACIElEQVR4nO3X6XKDMAxGUfACfv8nLhjwhtgmIu1M7/nVqEFfZRuSdh0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/HHGGLl8v/r7gWGw/cyO1fvNaG9Xn3kn0C1NFyHXx1wdr6qPvBUY+l5qvDSwtm4hV595K3DqO4Rp20yI71430MUL53Js5c6qzwd5JdDlw2fzChU/zivoz6oPfSFwfu+whJVX+W3d5OoH3go06bqx3MewHU+5WhvK7TfD+4Hnfefp92W5Ws9RHmRjLw6DQqDIpZ2ezqbN9e2VXG07pElMccLfCpSNafPq4beFkauVkCeJc5yfBYVAUbqdTFqpaFg6yNWjSW7MoRIoyM8IoYM5qh5McmcOncA9m06Fq/+ItYNclScJN+bQCmwNef7PFmj7DnI1h1pgbb7xrFHpG27NoRh41Lbt4MV77/ghEu+Pq29imoFN2yK6fu5tD3C5ejDHxSSagcdtm+HFD9ompZljuJhEM7Awx1rXFNLr9PCQq9IcY/nJ+HJgEe3L45ouSqcztZOr4hzd2SSqgU20bx4H+REfu9mzqjjHySSqgVnM82ZTVJe9D80/N/uqPMfhJKqBzVIUtttp3v3eeh9/nbZXrtaD5HMc2gOkH3jdNx7JVfOhtK+Wk5T3YxDmUA687ts5v1aq0yFXn/h64LS8bnKzquLrgQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPjPfgCFQQ9yD5vluwAAAABJRU5ErkJggg==",
      price: 423,
      reviews: 5,
    },
    {
      name: "rounded neck black shirt, web developer",
      rating: 3.5,
      size: "medium",
      url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAG1BMVEXMzMwAAACysrIZGRmZmZkzMzNMTExmZmZ/f3/jLKqNAAACIElEQVR4nO3X6XKDMAxGUfACfv8nLhjwhtgmIu1M7/nVqEFfZRuSdh0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/HHGGLl8v/r7gWGw/cyO1fvNaG9Xn3kn0C1NFyHXx1wdr6qPvBUY+l5qvDSwtm4hV595K3DqO4Rp20yI71430MUL53Js5c6qzwd5JdDlw2fzChU/zivoz6oPfSFwfu+whJVX+W3d5OoH3go06bqx3MewHU+5WhvK7TfD+4Hnfefp92W5Ws9RHmRjLw6DQqDIpZ2ezqbN9e2VXG07pElMccLfCpSNafPq4beFkauVkCeJc5yfBYVAUbqdTFqpaFg6yNWjSW7MoRIoyM8IoYM5qh5McmcOncA9m06Fq/+ItYNclScJN+bQCmwNef7PFmj7DnI1h1pgbb7xrFHpG27NoRh41Lbt4MV77/ghEu+Pq29imoFN2yK6fu5tD3C5ejDHxSSagcdtm+HFD9ompZljuJhEM7Awx1rXFNLr9PCQq9IcY/nJ+HJgEe3L45ouSqcztZOr4hzd2SSqgU20bx4H+REfu9mzqjjHySSqgVnM82ZTVJe9D80/N/uqPMfhJKqBzVIUtttp3v3eeh9/nbZXrtaD5HMc2gOkH3jdNx7JVfOhtK+Wk5T3YxDmUA687ts5v1aq0yFXn/h64LS8bnKzquLrgQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPjPfgCFQQ9yD5vluwAAAABJRU5ErkJggg==",
      price: 423,
      reviews: 5,
    },
    {
      name: "rounded neck black shirt, web developer",
      rating: 3.5,
      size: "medium",
      url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAG1BMVEXMzMwAAACysrIZGRmZmZkzMzNMTExmZmZ/f3/jLKqNAAACIElEQVR4nO3X6XKDMAxGUfACfv8nLhjwhtgmIu1M7/nVqEFfZRuSdh0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/HHGGLl8v/r7gWGw/cyO1fvNaG9Xn3kn0C1NFyHXx1wdr6qPvBUY+l5qvDSwtm4hV595K3DqO4Rp20yI71430MUL53Js5c6qzwd5JdDlw2fzChU/zivoz6oPfSFwfu+whJVX+W3d5OoH3go06bqx3MewHU+5WhvK7TfD+4Hnfefp92W5Ws9RHmRjLw6DQqDIpZ2ezqbN9e2VXG07pElMccLfCpSNafPq4beFkauVkCeJc5yfBYVAUbqdTFqpaFg6yNWjSW7MoRIoyM8IoYM5qh5McmcOncA9m06Fq/+ItYNclScJN+bQCmwNef7PFmj7DnI1h1pgbb7xrFHpG27NoRh41Lbt4MV77/ghEu+Pq29imoFN2yK6fu5tD3C5ejDHxSSagcdtm+HFD9ompZljuJhEM7Awx1rXFNLr9PCQq9IcY/nJ+HJgEe3L45ouSqcztZOr4hzd2SSqgU20bx4H+REfu9mzqjjHySSqgVnM82ZTVJe9D80/N/uqPMfhJKqBzVIUtttp3v3eeh9/nbZXrtaD5HMc2gOkH3jdNx7JVfOhtK+Wk5T3YxDmUA687ts5v1aq0yFXn/h64LS8bnKzquLrgQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPjPfgCFQQ9yD5vluwAAAABJRU5ErkJggg==",
      price: 423,
      reviews: 5,
    },
  ];
  return (
    <>
      <div className="sm:flex flex-wrap justify-evenly gap-10 md:gap-x-10 ">
        {images.map((item, index) => {
          return (
            <div key={index}>
              <ProductCard item={item} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default GeneralProducts;
