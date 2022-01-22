import React from 'react';
import { connect } from 'react-redux'
import { setUsers } from '../../../../redux/Users-reducer';
import { setCurrentPage } from '../../../../redux/Users-reducer';
import { toggServerInProgres, getUsersThunkCreater } from '../../../../redux/Users-reducer';
import Users from './Users';
import Preloader from '../../../Common/Preloader/Preloader';


class UsersConteiner extends React.Component {
    componentDidMount() {

        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
    }
    onPageChanged = (pageNumber) => {
        this.props.getUsersThunk(pageNumber, this.props.pageSize);
    }
    render() {

        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users currentPage={this.props.currentPage}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                users={this.props.users}
                onPageChanged={this.onPageChanged}
                isFetching={this.props.isFetching}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.Usersreducer.users,
        pageSize: state.Usersreducer.pageSize,
        totalUsersCount: state.Usersreducer.totalUsersCount,
        currentPage: state.Usersreducer.currentPage,
        isFetching: state.Usersreducer.isFetching,
    }
}
export default connect(mapStateToProps, {
    setUsers, setCurrentPage,
    toggServerInProgres, getUsersThunk: getUsersThunkCreater
})(UsersConteiner);