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
    let remainingServer = server;
    for (let i = 0; i < len; i++) {
      if (
        VMs[i]['CPU'] > remainingServer['CPU'] &&
        VMs[i]['RAM'] > remainingServer['RAM'] &&
        VMs[i]['HDD'] > remainingServer['HDD']
      ) {
        continue;
      } else if (
        VMs[i]['CPU'] <= remainingServer['CPU'] &&
        VMs[i]['RAM'] <= remainingServer['RAM'] &&
        VMs[i]['HDD'] <= remainingServer['HDD']
      ) {
        total.push(VMs[i]);
        remainingServer = {
          CPU: remainingServer['CPU'] - VMs[i]['CPU'],
          RAM: remainingServer['RAM'] - VMs[i]['RAM'],
          HDD: remainingServer['HDD'] - VMs[i]['HDD'],
        };
      }
    }

    return res.status(200).json({ result: total.length });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = calculateVM;
