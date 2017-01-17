import React, { Component, PropTypes } from 'react';
import Text from '../../containers/Text'

class Pagination extends Component {
  render() {
    const { onClick, pageNumber, maxPage, totalItems, perPage, className } = this.props
    const firstPage = pageNumber <= 0
    const lastPage = pageNumber >= maxPage
    const totalPages = -~(totalItems / perPage)
    const currentPage = pageNumber + 1

    return (
      <div className={className}>
        <small className="pages"><Text text="pages.search.page" /> {`${currentPage} / ${totalPages}`} </small>
        <br />

        <ul className="pagination">
          <li>
            { firstPage ?
              <a className="disabled icon" href="#"><i className="icon-hex-last" /> </a> :
              <a className="active icon" href="#" onClick={() => onClick(pageNumber - 1)}>
                <i className="icon-hex-last" />
              </a> }
          </li>

          {[...Array(totalPages).keys()].map((v, i) =>
            <li onClick={() => onClick(i)} key={v}>
              <a className={i === pageNumber ? 'active' : ''} href="#">{v + 1}</a>
            </li>)}

          <li>
            { lastPage ?
              <a className="disabled icon" href="#" > <i className="icon-hex-next" /> </a> :
              <a className="active icon" href="#" onClick={() => onClick(pageNumber + 1)}>
                <i className="icon-hex-next" />
              </a> }
          </li>
        </ul>

        <br />
      </div>

    );
  }
}

Pagination.propTypes = {
  onClick: PropTypes.func.isRequired,
  pageNumber: PropTypes.number.isRequired,
  maxPage: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  className: PropTypes.string
};

export default Pagination;
