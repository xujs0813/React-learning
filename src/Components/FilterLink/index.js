import {connect} from 'react-redux'
import {setVisibilityFilter} from '../../store/actions'
import Link from '../Link'

function mapStateToProps(state, ownProps){
    return {
        active: state.visibilityFilter === ownProps.filter
    }
}

function mapDispatchToProps(dispatch, ownProps){
    return {
        onClick: ()=>{
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)

export default FilterLink