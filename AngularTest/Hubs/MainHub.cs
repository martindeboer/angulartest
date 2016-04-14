using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using System.Threading;
using System.Threading.Tasks;

namespace AngularTest.Hubs
{
    public class MainHub : Hub
    {
        private Timer _timer;
        private int _min;
        private int _max;
        private const int _startAfter = 2000;
        private const int _fireEvery = 2000;
        private string _name;

        public MainHub()
        {
            _name = "Johan"; 
        }

        public void SetName (string name)
        {
            _name = name;
        }

        public void GetName ()
        {
            Clients.Caller.getName(_name);
        }

        public void Start(int min, int max)
        {
            _min = min;
            _max = max;

            _timer = new Timer(this.OnTick);
            _timer.Change(_startAfter, _fireEvery);
        }

        public void Stop ()
        {
            //_timer.Dispose();
            //_timer = null;
        }

        public override Task OnDisconnected(bool stopCalled)
        {
            //_timer.Dispose();
            //_timer = null;

            return base.OnDisconnected(stopCalled);
        }

        private void OnTick (object state)
        {
            Random random = new Random();
            Clients.Caller.newPalinDrome(_name + ":" + random.Next());
        }
    }
}