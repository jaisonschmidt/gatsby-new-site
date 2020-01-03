import React from "react"
import * as S from "../../Styled/GlobalComponents"

import { Link } from "gatsby"

const Pagination = ({
  isFirst,
  prevPage,
  alias,
  isLast,
  nextPage,
  numPages,
  currentPage,
}) => {
  return (
    <>
      {!isFirst && (
        <S.BtnMini as={Link} to={`/${alias}/${prevPage}`} rel="prev">
          ← Anterior
        </S.BtnMini>
      )}

      {Array.from({ length: numPages }, (_, i) => (
        <S.BtnMini
          as={Link}
          key={`pagination-number${i + 1}`}
          to={`/${alias}/${i === 0 ? "" : i + 1}`}
          className={currentPage === i + 1 ? "active" : ""}
        >
          {i + 1}
        </S.BtnMini>
      ))}

      {!isLast && (
        <S.BtnMini as={Link} to={`/${alias}/${nextPage}`} rel="next">
          Próxima →
        </S.BtnMini>
      )}
    </>
  )
}

export default Pagination
