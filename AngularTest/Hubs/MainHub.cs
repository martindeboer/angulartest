using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using System.Threading;
using System.Threading.Tasks;
using AngularTest.Interfaces;
using AngularTest.Services;

namespace AngularTest.Hubs
{
    public class MainHub : Hub
    {
        private Timer _timer;
        private int _min;
        private int _max;
        private const int _startAfter = 2000;
        private const int _fireEvery = 2000;
        private IPalinDromeService _palinDromeService;
        private Random _random;

        public MainHub(IPalinDromeService palinDromeService)
        {
            _palinDromeService = palinDromeService;
            _random = new Random();
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
          
        }

        public override Task OnDisconnected(bool stopCalled)
        {
           
            return base.OnDisconnected(stopCalled);
        }

        private void OnTick (object state)
        {
            var newPalinDrome = _palinDromeService.GeneratePalinDrome(_min, _max);

            Clients.Caller.newPalinDrome(newPalinDrome);
        }
    }
}