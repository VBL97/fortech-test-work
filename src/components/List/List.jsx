import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import Loader from "../Loader/Loader";
import {
  selectPokemonsData,
  selectLoadingStatus,
  selectMaxCount,
  setPokemonsData,
  setIsLoading,
} from "../../store/reducers/pokemons";
import prepareTypes from "../../utils/preparation-functions";
import { amountToShow } from "../../utils/const";
import "./List.css";
import Pokeapi from "../../utils/pokeapi";

export default function List() {
  const [currentAmount, setCurrentAmount] = useState(10);
  const [nextAmount, setNextAmount] = useState(0);
  const dispatch = useDispatch();
  const maxCount = useSelector(selectMaxCount);
  const pokemonsData = useSelector(selectPokemonsData);
  const pageCount = Math.ceil(maxCount / currentAmount);
  const loading = useSelector(selectLoadingStatus);
  const api = new Pokeapi();

  const fetchPokemons = (limit, offset) => {
    dispatch(setIsLoading());
    api
      .fetchPokemons(limit, offset)
      .then(data => dispatch(setPokemonsData(data)));
  };

  function handleAmountButtonClick(amount) {
    setCurrentAmount(amount);
    fetchPokemons(amount, nextAmount);
  }

  const handlePageClick = event => {
    const newNextAmount = (event.selected * currentAmount) % maxCount;
    setNextAmount(newNextAmount);
    fetchPokemons(currentAmount, newNextAmount);
  };

  return (
    <div className="list">
      {pokemonsData?.length !== 1 ? (
        <>
          <div className="list_count">
            {amountToShow.map(amount => (
              <button
                className={`list_count-amount ${
                  currentAmount === amount ? "list_count-amount_current" : null
                }`}
                onClick={() => handleAmountButtonClick(amount)}
                key={amount}
                type="button"
              >
                {amount}
              </button>
            ))}
          </div>
          <ReactPaginate
            pageCount={pageCount}
            containerClassName="list-pagination"
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            onPageChange={handlePageClick}
            renderOnZeroPageCount={null}
            pageLinkClassName="list-pagination-page"
            activeLinkClassName="list-pagination-active-page"
            previousLinkClassName="list-pagination-previous-page"
            nextLinkClassName="list-pagination-next-page"
          />
        </>
      ) : null}
      {/* Need to be refactored */}
      {loading ? (
        <Loader />
      ) : (
        <ul className="list_content">
          {pokemonsData?.map(pokemon => (
            <Card
              id={pokemon.id}
              name={pokemon.name}
              avatar={pokemon.sprites.front_default}
              type={prepareTypes(pokemon.types)}
              hp={pokemon.stats.find(el => el.stat.name === "hp").base_stat}
              attack={
                pokemon.stats.find(el => el.stat.name === "attack").base_stat
              }
              defense={
                pokemon.stats.find(el => el.stat.name === "defense").base_stat
              }
              key={pokemon.id}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
