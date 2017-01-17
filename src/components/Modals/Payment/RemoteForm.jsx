import React from 'react'

const RemoteForm = ({ children, actionUrl, className, onSubmit }) => {
  return (
    <form
      action={actionUrl}
      className={className}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
}

export default RemoteForm;
