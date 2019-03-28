import { RouteComponentProps } from '@reach/router'
import React from 'react'
import { IUser } from '../models/user'

interface IProfileProps extends RouteComponentProps {
  user: IUser,
}

const Profile: React.FC<IProfileProps> = ({ user }) => (
  // todo username form state by useReducer
  <div className="profile-card">
    <h2>{`Hello ${user.username}`}</h2>
  </div>
)

export default Profile
