import React, { Component } from 'react'
import { Pagination } from 'semantic-ui-react'
import { connect } from 'react-redux'

class Paginations extends Component {

  constructor() {
    super()
    this.state = {
      showEllipsis: true,
      showFirstAndLastNav: true,
      showPreviousAndNextNav: true,
    }
  }

  render() {
    const { showEllipsis, showFirstAndLastNav, showPreviousAndNextNav } = this.state
    const { paginate, handlePaginationChange } = this.props

    return (
          <Pagination
            activePage={paginate.page}
            onPageChange={handlePaginationChange}
            size='mini'
            totalPages={paginate.total_page}
            ellipsisItem={showEllipsis ? undefined : null}
            firstItem={showFirstAndLastNav ? undefined : null}
            lastItem={showFirstAndLastNav ? undefined : null}
            prevItem={showPreviousAndNextNav ? undefined : null}
            nextItem={showPreviousAndNextNav ? undefined : null}
          />
    )
  }
}

const mapStateToProps = (state) => {
    return {
      paginate : state.pagination
    }
}

export default connect(mapStateToProps)(Paginations)
