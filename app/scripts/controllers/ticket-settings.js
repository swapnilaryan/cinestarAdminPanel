'use strict';

/**
 * @ngdoc function
 * @name sbAdminApp.controller:TicketSettingsCtrl
 * @description
 * # TicketSettingsCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('TicketSettingsCtrl', function ($scope) {
      $scope.days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
      $scope.ticketConfig=[{
          day:"Monday",
          ticketDetails:[{
              ticketGroup:"Kids",
              ticketName:"Kids Ticket",
              ticketPrice2D:"$3",
              ticketPrice3D:"$7"
          },
              {
                  ticketGroup:"Adult",
                  ticketName:"Adult Ticket",
                  ticketPrice2D:"$5",
                  ticketPrice3D:"$7"
              },
              {
                  ticketGroup:"Senior",
                  ticketName:"Senior Ticket",
                  ticketPrice2D:"$4",
                  ticketPrice3D:"$7"
              }
          ]
      },{
          day:"Tuesday",
          ticketDetails:[{
              ticketGroup:"Kids",
              ticketName:"Kids Ticket",
              ticketPrice2D:"$3",
              ticketPrice3D:"$7"
          },
              {
                  ticketGroup:"Adult",
                  ticketName:"Adult Ticket",
                  ticketPrice2D:"$5",
                  ticketPrice3D:"$7"
              },
              {
                  ticketGroup:"Senior",
                  ticketName:"Senior Ticket",
                  ticketPrice2D:"$4",
                  ticketPrice3D:"$7"
              }
          ]
      },{
          day:"Wednesday",
          ticketDetails:[{
              ticketGroup:"Kids",
              ticketName:"Kids Ticket",
              ticketPrice2D:"$3",
              ticketPrice3D:"$7"
          },
              {
                  ticketGroup:"Adult",
                  ticketName:"Adult Ticket",
                  ticketPrice2D:"$5",
                  ticketPrice3D:"$7"
              },
              {
                  ticketGroup:"Senior",
                  ticketName:"Senior Ticket",
                  ticketPrice2D:"$4",
                  ticketPrice3D:"$7"
              }
          ]
      },{
          day:"Thrusday",
          ticketDetails:[{
              ticketGroup:"Kids",
              ticketName:"Kids Ticket",
              ticketPrice2D:"$3",
              ticketPrice3D:"$7"
          },
              {
                  ticketGroup:"Adult",
                  ticketName:"Adult Ticket",
                  ticketPrice2D:"$5",
                  ticketPrice3D:"$7"
              },
              {
                  ticketGroup:"Senior",
                  ticketName:"Senior Ticket",
                  ticketPrice2D:"$4",
                  ticketPrice3D:"$7"
              }
          ]
      },{
          day:"Friday",
          ticketDetails:[{
              ticketGroup:"Kids",
              ticketName:"Kids Ticket",
              ticketPrice2D:"$3",
              ticketPrice3D:"$7"
          },
              {
                  ticketGroup:"Adult",
                  ticketName:"Adult Ticket",
                  ticketPrice2D:"$5",
                  ticketPrice3D:"$7"
              },
              {
                  ticketGroup:"Senior",
                  ticketName:"Senior Ticket",
                  ticketPrice2D:"$4",
                  ticketPrice3D:"$7"
              }
          ]
      },{
          day:"Saturday",
          ticketDetails:[{
              ticketGroup:"Kids",
              ticketName:"Kids Ticket",
              ticketPrice2D:"$3",
              ticketPrice3D:"$7"
          },
              {
                  ticketGroup:"Adult",
                  ticketName:"Adult Ticket",
                  ticketPrice2D:"$5",
                  ticketPrice3D:"$7"
              },
              {
                  ticketGroup:"Senior",
                  ticketName:"Senior Ticket",
                  ticketPrice2D:"$4",
                  ticketPrice3D:"$7"
              }
          ]
      },{
          day:"Sunday",
          ticketDetails:[{
              ticketGroup:"Kids",
              ticketName:"Kids Ticket",
              ticketPrice2D:"$3",
              ticketPrice3D:"$7"
          },
              {
                  ticketGroup:"Adult",
                  ticketName:"Adult Ticket",
                  ticketPrice2D:"$5",
                  ticketPrice3D:"$7"
              },
              {
                  ticketGroup:"Senior",
                  ticketName:"Senior Ticket",
                  ticketPrice2D:"$4",
                  ticketPrice3D:"$7"
              }
          ]
      }];
  });
