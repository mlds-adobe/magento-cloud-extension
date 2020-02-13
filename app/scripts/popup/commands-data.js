// const sampleCmdObj = {
//   text: '',
//   scriptsInValue: [''],
//   cmdTypes: ['prerequisite', 'maintenance'],
//   envTypes: ['cloud', 'vm', 'localhost', 'any'],
//   additionalSearchTerms: [],
//   help: ''
// }

const commands = [

  // prerequisite
  {
    text: '1) Install the Magento Cloud CLI',
    scriptsInValue: ['install-cli-and-login.sh'],
    cmdTypes: ['prerequisite'],
    envTypes: ['cloud'],
    help: 'You should only need to run this command on your computer once.'
  },
  {
    text: '2) Setup your ssh keys',
    scriptsInValue: ['setup-ssh-key.sh'],
    cmdTypes: ['prerequisite'],
    envTypes: ['cloud'],
    help: 'You should only need to run this command on your computer once.'
  },

  // image-copy
  {
    text: 'Copy imgs to env',
    scriptsInValue: ['lib.sh', 'copy-imgs-to-env.sh'],
    cmdTypes: ['image-copy'],
    envTypes: ['cloud', 'vm'],
    help: 'Send images to the remote magento media/import/products folder'
  },

  // lighthouse
  {
    text: 'Run lighthouse',
    scriptsInValue: ['lib.sh', 'run-lighthouse.sh'],
    cmdTypes: ['lighthouse'],
    envTypes: ['cloud', 'vm'],
    help: 'Install and run Google\'s Lighthouse performance tool'
  },

  // self-update
  {
    text: 'Update Available!',
    scriptsInValue: ['lib.sh', 'update-extension.sh'],
    cmdTypes: ['self-update'],
    envTypes: ['any'],
    help: 'Get the latest extension features.'
  },

  // magento
  {
    text: 'Create admin account',
    scriptsInValue: ['lib.sh', 'admin-create.sh'],
    cmdTypes: ['magento'],
    envTypes: ['cloud', 'vm'],
  },
  {
    text: 'Unlock admin account',
    scriptsInValue: ['lib.sh', 'admin-unlock.sh'],
    cmdTypes: ['magento'],
    envTypes: ['cloud', 'vm'],
  },
  {
    text: 'Run cron once',
    scriptsInValue: ['lib.sh', 'run-cron.sh'],
    cmdTypes: ['magento'],
    envTypes: ['cloud', 'vm'],
  },
  {
    text: 'Run cron repeatedly',
    scriptsInValue: ['lib.sh', 'run-cron-repeatedly.sh'],
    cmdTypes: ['magento'],
    envTypes: ['cloud', 'vm'],
    help: 'Run Magento cron jobs each min for 1 hr'
  },
  {
    text: 'Reindex',
    scriptsInValue: ['lib.sh', 'reindex.sh'],
    cmdTypes: ['magento'],
    envTypes: ['cloud', 'vm'],
    help: 'Run all indexes immediately.'
  },
  {
    text: 'Reindex; flush; warm',
    scriptsInValue: ['lib.sh', 'reindex.sh', 'cache-flush.sh', 'cache-warm.sh'],
    cmdTypes: ['magento'],
    envTypes: ['cloud', 'vm'],
    help: 'Run all indexes immediately. Flush (clean) then begin warming all caches.'
  },
  {
    text: 'Warm cache',
    scriptsInValue: ['lib.sh', 'cache-warm.sh'],
    cmdTypes: ['magento'],
    envTypes: ['cloud', 'vm'],
    help: 'Warm (prepopulate) the cache for faster access. A scripte will begin crawling the site.'
  },
  {
    text: 'Flush; then warm cache',
    scriptsInValue: ['lib.sh', 'cache-flush.sh', 'cache-warm.sh'],
    cmdTypes: ['magento'],
    envTypes: ['cloud', 'vm'],
    help: 'Flush  (clean) then begin warming all caches.'
  },
  {
    text: 'Install PWA',
    scriptsInValue: ['lib.sh', 'sc-pwa-setup.sh'],
    cmdTypes: ['magento'],
    envTypes: ['cloud', 'vm'],
    help: 'Install and run PWA studio locally backed by a cloud env or vm.'
  },
  {
    text: 'Deploy a language',
    scriptsInValue: ['lib.sh', 'deploy-lang.sh'],
    cmdTypes: ['magento'],
    envTypes: ['cloud', 'vm'],
    help: 'Choose a languages to deploy from the pre-bundled options.'
  },
  {
    text: 'Disable cms cache',
    scriptsInValue: ['lib.sh', 'cache-disable-cms.sh'],
    cmdTypes: ['magento'],
    envTypes: ['cloud', 'vm'],
    help: 'Disable relevant caches while setting up the store front.'
  },
  {
    text: 'Enable all caches',
    scriptsInValue: ['lib.sh', 'cache-enable.sh'],
    cmdTypes: ['magento'],
    envTypes: ['cloud', 'vm'],
  },
  {
    text: 'Optimize for performance',
    scriptsInValue: ['lib.sh', 'cache-enable.sh', 'optimize-env-for-performance.sh', 'cache-flush.sh'],
    cmdTypes: ['magento'],
    envTypes: ['cloud', 'vm'],
    help: 'Enable all caches. Optimize JS & CSS.'
  },
  {
    text: 'Optimize for dev',
    scriptsInValue: ['lib.sh', 'cache-disable-cms.sh', 'optimize-env-for-customization.sh', 'cache-flush.sh'],
    cmdTypes: ['magento'],
    envTypes: ['cloud', 'vm'],
    help: 'Enable all caches. Unbunlde JS & CSS.'
  },
  {
    text: 'Switch to developer mode',
    scriptsInValue: ['lib.sh', 'mode-dev.sh'],
    cmdTypes: ['magento'],
    envTypes: ['vm'],
    help: 'Switch to Magento\'s "developer" mode'
  },
  {
    text: 'Switch to prod mode',
    scriptsInValue: ['lib.sh', 'mode-prod.sh'],
    cmdTypes: ['magento'],
    envTypes: ['vm'],
    help: 'Switch to Magento\'s "productioon" mode'
  },
  // {
  //   text: 'Upgrade modules',
  //   scriptsInValue: ['lib.sh', ''],
  //   cmdTypes: ['magento'],
  //   envTypes: ['cloud', 'vm'],
  //   help: 'Run upgrade'
  // },

  {
    text: 'Diagnose, repair, report',
    scriptsInValue: ['lib.sh', 'dl-and-run-drr.sh'],
    cmdTypes: ['debug'],
    envTypes: ['cloud', 'vm'],
    help: 'Find and attempt to repair common issues. Generate useful debugging info about the env.'
  },
  {
    text: 'Screen capture',
    scriptsInValue: ['lib.sh', 'screen-capture.sh'],
    cmdTypes: ['debug'],
    envTypes: ['cloud', 'vm'],
    help: 'Quickly snapshot a window. Useful to paste in slack (or anywhere) for support.'
  },
  {
    text: 'Screen record',
    scriptsInValue: ['lib.sh', 'screen-record.sh'],
    cmdTypes: ['debug'],
    envTypes: ['cloud', 'vm'],
    help: 'Record a portion of your screen (plus mic audio) to describe and demo an issue.'
  },
  {
    text: 'Watch logs',
    scriptsInValue: ['lib.sh', 'watch-logs.sh'],
    cmdTypes: ['debug'],
    envTypes: ['cloud', 'vm'],
    help: 'Show access and error logs in real time while accessing the site.'
  },

  // maintenance
  {
    text: 'Backup',
    scriptsInValue: ['lib.sh', 'backup-env.sh', 'maintenance'],
    cmdTypes: ['maintenance'],
    envTypes: ['cloud', 'vm'],
  },
  {
    text: 'Turn email on/off',
    scriptsInValue: ['lib.sh', 'toggle-email.sh'],
    cmdTypes: ['maintenance'],
    envTypes: ['cloud'],
    help: 'To enable/disable outgoing emails on cloud, the env must redeploy.'
  },
  {
    text: 'Delete env immediately',
    scriptsInValue: ['lib.sh', 'delete-env.sh'],
    cmdTypes: ['maintenance'],
    envTypes: ['cloud'],
    help: 'Cloud\'s delete only deactivates. Use this to actually delete.'
  },
  {
    text: 'Restore env',
    scriptsInValue: ['lib.sh', 'restore-env.sh', 'reindex.sh', 'cache-flush.sh', 'cache-warm.sh'],
    cmdTypes: ['maintenance'],
    envTypes: ['cloud', 'vm'],
    help: 'Immediately restore database and media to previous state using local backup.'
  },
  {
    text: 'Create env from backup',
    scriptsInValue: ['lib.sh', 'create-new-cloud-env-from-backup.sh'],
    cmdTypes: ['maintenance'],
    envTypes: ['cloud', 'vm'],
  },
  {
    text: 'Force rebuild env',
    scriptsInValue: ['lib.sh', 'rebuild-cloud-env.sh'],
    cmdTypes: ['maintenance'],
    envTypes: ['cloud', 'vm'],
    help: 'Some operations (e.g. enabling email) require the env to be rebuilt. Please backup first.'
  },
  {
    text: 'Restart service',
    scriptsInValue: ['lib.sh', ''],
    cmdTypes: ['maintenance'],
    envTypes: ['cloud', 'vm'],
  },
  {
    text: 'Update VM v1',
    scriptsInValue: ['lib.sh', 'update-vm.sh'],
    cmdTypes: ['maintenance'],
    envTypes: ['vm'],
    help: 'Apply fixes, compatibility updates, etc. to the vm.'
  },

  // access
  {
    text: 'SSH into env',
    scriptsInValue: ['lib.sh', 'ssh.sh'],
    cmdTypes: ['access'],
    envTypes: ['cloud', 'vm'],
  },
  {
    text: 'Access private repos',
    scriptsInValue: ['lib.sh', 'configure-proxies.sh'],
    cmdTypes: ['access'],
    envTypes: ['cloud', 'vm'],
  },
  {
    text: 'Local access; bypass cloud firewall',
    scriptsInValue: ['lib.sh', 'bypass-waf-for-pb.sh'],
    cmdTypes: ['access'],
    envTypes: ['cloud'],
  },
  {
    text: 'Give another IP access',
    scriptsInValue: ['lib.sh', 'auth-list.enc.sh', 'auth-ip.sh'],
    cmdTypes: ['access'],
    envTypes: ['cloud'],
    help: 'All office & VPN IPs will be allowed. You may add 1 more IP address temporarily.'
  },
  {
    text: 'Show "Authorization" header',
    scriptsInValue: ['lib.sh', 'auth-show.sh'],
    cmdTypes: ['access'],
    envTypes: ['cloud'],
    help: 'This header can be used by applications when passwords are not an option.'
  },

]
