
const User = ({id,name,username,email,phone}) => {
    return (
      
          <tbody className="tr">
            <tr>
              <td>{id}</td>
              <td>{name}</td>
              <td>{username}</td>
              <td>{email}</td>
              <td>{phone}</td>
            </tr>
          </tbody>
      
      );
}

export default User;