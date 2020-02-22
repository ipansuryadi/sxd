/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Strucutre:
          url     => router path
          name    => name to display in sidebar
          slug    => router path name
          icon    => Feather Icon component/icon name
          tag     => text to display on badge
          tagColor  => class to apply on badge element
          i18n    => Internationalization
          submenu   => submenu of current item (current item will become dropdown )
                NOTE: Submenu don't have any icon(you can add icon if u want to display)
          isDisabled  => disable sidebar item/group
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

export default [
  {
    url: '/dashboard/analytics',
    name: 'Dashboard',
    slug: 'dashboard',
    icon: 'HomeIcon',
    i18n: 'Dashboard',
  },
  {
    header: 'App System',
    i18n: 'App System',
  },
  {
    url: '/app-system/parameter-config',
    name: 'ParameterConfig',
    slug: 'parameter-config',
    icon: 'SlidersIcon',
    i18n: 'Parameter Config',
  },
  {
    url: '/app-system/audit-trail',
    name: 'AuditTrail',
    slug: 'email',
    icon: 'ClockIcon',
    i18n: 'Audit Trail',
  },
  {
    header: 'InternalAccess',
    i18n: 'Internal Access',
  },
  {
    url: '/internal-access/app-role',
    name: 'AppRole',
    slug: 'email',
    icon: 'UnlockIcon',
    i18n: 'App Role',
  },
  {
    url: '/internal-access/app-user',
    name: 'AppUser',
    slug: 'email',
    icon: 'UsersIcon',
    i18n: 'App User',
  },
  {
    url: '/internal-access/organization-unit',
    name: 'OrganizationUnit',
    slug: 'email',
    icon: 'GitMergeIcon',
    i18n: 'Organization Unit',
  },
  {
    header: 'Project Maintenance',
    i18n: 'Project Maintenance',
  },
  {
    url: '/project-access/project-maintenance/job-list',
    name: 'JobList',
    slug: 'email',
    icon: 'ListIcon',
    i18n: 'Job List',
  },
  {
    url: '/project-access/project-maintenance/project-definition',
    name: 'ProjectDefinition',
    slug: 'dataList',
    icon: 'TrelloIcon',
    i18n: 'Project Definition',
  },
  {
    header: 'Project Access',
    i18n: 'Project Access',
  },
  {
    url: null,
    name: 'ClientMaintenance',
    icon: 'SmileIcon',
    tagColor: 'danger',
    i18n: 'Client Maintenance',
    submenu: [
      {
        url: '/project-access/client-maintenance/client-registration',
        name: 'ClientRegistration',
        slug: 'formElementSelect',
        i18n: 'Client Registration',
      },
      {
        url: '/project-access/client-maintenance/report-setup',
        name: 'ReportSetup',
        slug: 'formElementCheckbox',
        i18n: 'Report Setup',
      },
      {
        url: '/project-access/client-maintenance/user-client-access',
        name: 'UserClientAccess',
        slug: 'formElementSwitch',
        i18n: 'User Client Access',
      },
    ],
  },
  {
    url: null,
    name: 'ExecutorMaintenance',
    icon: 'EditIcon',
    tagColor: 'danger',
    i18n: 'Executor Maintenance',
    submenu: [
      {
        url: '/project-access/executor-maintenance/executor-registration',
        name: 'ExecutorRegistration',
        slug: 'formElementSelect',
        i18n: 'Executor Registration',
      },
      {
        url: '/project-access/executor-maintenance/user-executor-access',
        name: 'UserExecutorAccess',
        slug: 'formElementCheckbox',
        i18n: 'User Executor Access',
      },
      {
        url: '/project-access/executor-maintenance/group-user-executor',
        name: 'GroupUserExecutor',
        slug: 'formElementCheckbox',
        i18n: 'Group User Executor',
      },
    ],
  },
];
