import GroupItem from './GroupItem'

const Groups = ({ data }) => {
  const groupIds = Object.keys(data)

  return (
    <div>
      {groupIds.map(groupId => {
        const members = data[groupId]
        return <GroupItem key={groupId} id={groupId} members={members} />
      })}
    </div>
  )
}

export default Groups
