

const Notifications = () => {
  return (
    <div className="sticky border-2 shadow-2xl border-gray-400 bg-gray-300 rounded-xl w-80 h-120 overflow-x-auto m-2 p-2">
      <div className="flex flex-col justify-baseline items-stretch">
        {createNotificationsList()}
      </div>

    </div>
  )
}

export default Notifications

type Notification = [string, string];

const newNotifications = (): Notification[] => {
  const notarr: Notification[] = [];
  const count = 8 //Math.floor(Math.random() * 10);
  for (let i = 0; i < count; i++) {
    notarr.push([i.toString(), 'Overlay Panel Content']);
  }
  return notarr;
};

const createNotificationsList = () => {
  const notifies: Notification[] = newNotifications();

  return (
    <div>
      {notifies.map((val, index) => (
        <div key={index} className="mb-2 p-2 border rounded-xl w-full bg-black/10">
          <h4 className="font-bold text-lg">{val[0]}</h4>
          <p className="text-gray-700">{val[1]}</p>
        </div>
      ))}
    </div>
  );
};
