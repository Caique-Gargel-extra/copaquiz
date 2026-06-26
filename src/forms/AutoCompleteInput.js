import React, { useState } from "react";
import styles from "./AutoCompleteInput.module.css";
import defaultPlayer from "../imgPlayers/unknow.png";

const AutoCompleteInput = ({
  suggestions,
  inputValue,
  setInputValue,
  submit,
  id
}) => {

  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;

    setInputValue(value);

    if (value.length > 0) {
      const filtered = [
        ...new Map(
          suggestions.map((item) => [item.nome.toLowerCase(), item])
        ).values(),
      ]
        .filter((item) =>
          item.nome.toLowerCase().includes(value.toLowerCase())
        )
        .sort((a, b) => {
          const aStarts = a.nome
            .toLowerCase()
            .startsWith(value.toLowerCase());

          const bStarts = b.nome
            .toLowerCase()
            .startsWith(value.toLowerCase());

          if (aStarts && !bStarts) return -1;
          if (!aStarts && bStarts) return 1;

          return a.nome.localeCompare(b.nome);
        });

      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleClick = (suggestion) => {
    setInputValue(suggestion.nome);
    setShowSuggestions(false);

    // envia apenas {id, nome, idFoto}
    submit(suggestion);
  };
  function carregaImg(img) {
    var m;
    try {
      m = require(`../imgPlayers/${img}.png`);
      return m;
    } catch (e) {
      if (e.code !== 'MODULE_NOT_FOUND') {
        throw e;
      }
      return defaultPlayer;
    }
  }

  return (
    <div className={styles.autoinput}>
      <input
        id={id}
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Digite para buscar..."
        autoCapitalize="off"
        autoComplete="off"
        autoCorrect="off"
        spellCheck={false}
      />

      {showSuggestions && (
        <ul>
          {filteredSuggestions.length > 0 ? (
            filteredSuggestions.map((suggestion) => (
              <li
                key={suggestion.id}
                onClick={() => handleClick(suggestion)}
              >
                <img
                  src={`https://images.fotmob.com/image_resources/playerimages/${suggestion.idFoto}.png`}
                  alt={suggestion.nome}
                  onError={(e) => {
                    e.target.src = carregaImg(suggestion.id);
                  }}
                />

                {suggestion.nome}
              </li>
            ))
          ) : (
            <li style={{ padding: "10px", color: "#999" }}>
              Nenhuma sugestão encontrada
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default AutoCompleteInput;