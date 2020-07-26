const calculateVM = (req, res) => {
  try {
    if (
      !req.body ||
      !req.body.serverType ||
      !req.body.virtualMachines ||
      !req.body.virtualMachines.length
    ) {
      return res.status(400).json({
        message: 'Provide the right parameters',
      });
    }
    const { serverType, virtualMachines } = req.body;
    const len = virtualMachines.length;
    const total = [];
    for (let i = 0; i < len; i++) {
      if (
        virtualMachines[i]['CPU'] > serverType['CPU'] &&
        virtualMachines[i]['RAM'] > serverType['RAM'] &&
        virtualMachines[i]['HDD'] > serverType['HDD']
      ) {
        continue;
      } else if (
        virtualMachines[i]['CPU'] <= serverType['CPU'] &&
        virtualMachines[i]['RAM'] <= serverType['RAM'] &&
        virtualMachines[i]['HDD'] <= serverType['HDD']
      ) {
        total.push(virtualMachines[i]);
        serverType['CPU'] -= virtualMachines[i]['CPU'];
        serverType['RAM'] -= virtualMachines[i]['RAM'];
        serverType['HDD'] -= virtualMachines[i]['HDD'];
      }
    }

    return res.status(200).json({ result: total.length });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = calculateVM;
