const calculateVM = (req, res) => {
  try {
    if (!req.body || !req.body.server || !req.body.VMs) {
      return res.status(400).json({
        message: 'Provide the right parameters',
      });
    }
    const { server, VMs } = req.body;
    const len = VMs.length;
    const total = [];
    for (let i = 0; i < len; i++) {
      if (
        VMs[i]['CPU'] > server['CPU'] &&
        VMs[i]['RAM'] > server['RAM'] &&
        VMs[i]['HDD'] > server['HDD']
      ) {
        continue;
      } else if (
        VMs[i]['CPU'] <= server['CPU'] &&
        VMs[i]['RAM'] <= server['RAM'] &&
        VMs[i]['HDD'] <= server['HDD']
      ) {
        total.push(VMs[i]);
        server['CPU'] -= VMs[i]['CPU'];
        server['RAM'] -= VMs[i]['RAM'];
        server['HDD'] -= VMs[i]['HDD'];
      }
    }

    return res.status(200).json({ result: total.length });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = calculateVM;
